const request = require("request-promise")
const queue = require("async-delay-queue")
const fs = require('fs');
const baseUrl = "https://api.warframe.market/v1"
const timeout = (fn, s) => {
  queue.delay(fn, 'push', 50)
}

class Scraper {
  constructor() {
    this.scraped = []
  }

  async getItems() {
    const map = await request.get(baseUrl + "/items")
    const items = JSON.parse(map).payload.items.en

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const url = item.url_name

      await this.getItemData(url, i)
      console.log(`Fetched item data for ${item.item_name}`)
    }
    fs.writeFileSync(__dirname + "/../data/items.json", JSON.stringify(this.scraped, null, 2), "utf-8")
  }

  async getItemData(url, mult) {
    const targetUrl = baseUrl + '/items/' + url.replace('’', '%E2%80%99')
    let item

    try {
      item = await queue.delay(() => request.get(targetUrl, 'push', 50))
    } catch (err) {
      return this.getItemData(url, mult)
    }

    if (!item.includes('[404]')) {
      if (!this.isAdded(url, this.scraped)) {
        const itemSet = JSON.parse(item).payload.item.items_in_set

        let parsed = {}
        parsed.name = this.getItemName(itemSet)
        parsed.type = this.getItemType(itemSet)
        parsed.ranks = this.getItemMaxRank(itemSet)
        parsed.description = this.getItemDescription(itemSet)
        parsed.components = this.getItemComponents(itemSet)
        this.scraped.push(parsed)
        console.log(`> Added [${parsed.components.map(item => item.name).join(', ')}]`)
      }
    }
  }

  /**
   * Find item name by checking for consistent string among all components
   * Nikana Blade, Nikana Hilt, Nikana Blueprint -> Nikana
   */
  getItemName(itemSet) {
    let name = itemSet[0].en.item_name
    let names = []

    itemSet.forEach(item => {
      names.push(item.en.item_name)
    })
    names.forEach(subname => {
      let matched = []
      for (let i = 0; i < subname.length; i++) {
        if (subname[i] === name[i]) {
          matched.push(subname[i])
        } else {
          break
        }
      }
      name = matched.join("").replace(/\s+$/g,'')
    })
    console.log(`\n-- ${name}`)
    return name
  }

  /**
   * Retrieve intersection of elements in each component's tag array.
   * [prime, blade], [prime, hilt], [prime, blueprint] -> [prime]
   */
  getItemType(itemSet) {
    let tags = itemSet[0].tags
    let name = itemSet[0].en.item_name.toLowerCase()

    // Expect all primes to have 'Prime' in their name
    if (name.includes('prime') && !name.includes('primed')) {
      return 'Prime'
    }

    for (let i = 1; i < itemSet.length; i++) {
      tags = tags.filter(tag => itemSet[i].tags.includes(tag))
    }

    // Remove 'parts' tag, because it's pretty damn useless
    let index = tags.indexOf('parts')
    if (index > -1) {
      tags.splice(index, 1)
    }
    let result = tags[0]

    // Capitalize output or log warning if nothing was found
    if (result) {
      result = result.replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, (_, g1, g2) => g1 + g2.toUpperCase())
    } else {
      console.log(`WARN: Could not find item type for ${itemSet[0].en.item_name} -> assigning 'Misc'`)
      result = 'Misc'
    }
    return result
  }

  getItemComponents(itemSet) {
    let components = [{
      name: 'Set',
      ducats: 0,
      droplocations: []
    }]
    let relics = []

    itemSet.forEach(item => {

      // Only add further components if the current one is a set, otherwise
      // there'll be quite a few duplicates
      if (item.en.item_name.toLowerCase().includes(' set')) {
        itemSet.forEach(item => {
          let partname = item.en.item_name
          let part = partname.split(' ')
          if (part[part.length - 1].toLowerCase() !== 'set') {
            let relics = []
            for (let a = 0; a < item.en.drop.length; a++) {
              let rarity = item.en.drop[a].name.split(" ")
              let relic = item.en.drop[a].name.slice(0, item.en.drop[a].name.length - rarity[rarity.length - 1].length - 1)
              relics.push({
                name: relic,
                rarity: rarity[rarity.length - 1]
              })
            }
            components.push({
              name: part[part.length - 1],
              ducats: item.ducats || 0,
              droplocations: relics
            })
            // Add ducats to Set
            components[0].ducats += item.ducats
          }
        })
      }
    })
    return components.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
  }

  getItemMaxRank(itemSet) {
    let ranks = []

    itemSet.forEach(item => {
      if (item.tags.includes('mod')) {
        ranks.push(item.mod_max_rank)
      }
    })
    return ranks[0]
  }

  getItemDescription(itemSet) {
    let descriptions = []

    itemSet.forEach(item => {
      if (!(item.tags.includes('prime') && item.tags.includes('parts'))) {
        descriptions.push(item.en.description.replace('</p><p>', '. ').replace(/<[^>]*>/g, ''))
      }
    })
    return descriptions[0]
  }

  isAdded(itemname, dataset) {
    itemname = itemname.toLowerCase();
    for (let i = 0; i < dataset.length; i++) {
      if (itemname.replace(/_/g, ' ').includes(dataset[i].name.toLowerCase())) {
        return true
      }
    }
    return false
  }
}
module.exports = new Scraper()
