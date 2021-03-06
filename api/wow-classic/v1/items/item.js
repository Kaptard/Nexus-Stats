const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic item statistics for a specific item
 */
class Item extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get an item description.'
    this.schema.url = '/wow-classic/v1/item/:item'
    this.schema.request = { url: '/wow-classic/v1/item/2589' }
    this.schema.response = {
      itemId: Number,
      name: String,
      uniqueName: String,
      icon: String,
      tags: [String],
      requiredLevel: Number,
      itemLevel: Number,
      sellPrice: Number,
      vendorPrice: Number,
      itemLink: String,
      tooltip: [{
        label: String
      }]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    let itemId = req.params.item

    itemId = !isNaN(parseFloat(itemId)) && isFinite(itemId) ? parseInt(itemId) : false
    const item = await this.db.collection('items').findOne(itemId ? { itemId } : { uniqueName: req.params.item.toLowerCase() })
    if (!item) {
      const response = {
        error: 'Not found.',
        reason: `Item ${req.params.item} could not be found.`
      }
      this.cache(response, 60 * 60)
      return res.status(404).send(response)
    }
    if (!itemId) itemId = item.itemId // Set ID if API call was made with unique name

    const response = {
      itemId,
      name: item.name,
      uniqueName: item.uniqueName,
      contentPhase: item.contentPhase,
      icon: `https://wow.zamimg.com/images/wow/icons/large/${item.icon}.jpg`,
      tags: [item.quality, item.class],
      requiredLevel: item.requiredLevel,
      itemLevel: item.itemLevel,
      sellPrice: item.sellPrice,
      vendorPrice: item.vendorPrice || null,
      tooltip: item.tooltip,
      itemLink: item.itemLink
    }

    this.cache(response, 60)
    return res.send(response)
  }
}

module.exports = Item
