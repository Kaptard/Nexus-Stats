/**
 * Utility functions
 */

export default {
  // Parses a numeric price into gold, silver, copper
  parsePrice (price) {
    const gold = Math.floor(price / 10000)
    const silver = Math.floor(price / 100 - gold * 100)
    const copper = price - gold * 10000 - silver * 100
    // return { gold, silver, copper }
    let string = ''
    if (gold) string += `${gold}g `
    if (silver) string += `${silver}s `
    string += `${copper}c`
    return string
  },

  // Interpolates a secondary value array of { x, [y1, y2...] } on the primary values
  // Assumes already sorted arrays by x
  interpolateValues (primary, secondary, xKey) {
    if (!primary.length || !secondary.length) return []

    const interpolated = []
    const yKeys = Object.keys(secondary[0]).filter(k => k !== xKey)

    for (const primaryEntry of primary) {
      const primaryX = primaryEntry[xKey]
      const before = secondary.slice().reverse().find(s => s[xKey] <= primaryX)
      const after = secondary.find(s => s[xKey] >= primaryX)

      const iplElem = {}
      iplElem[xKey] = primaryX

      // If no elements where found something is wrong with this array
      if (!before && !after) continue

      // If both elements were found, perform interpolation
      else if (before && after) {
        let iplPct = (primaryX - before[xKey]) / (after[xKey] - before[xKey])
        if (isNaN(iplPct)) iplPct = 0 // Catch zero divide
        for (const yKey of yKeys) iplElem[yKey] = Math.round(before[yKey] * (1 - iplPct) + after[yKey] * iplPct)
      }

      // Otherwise just use the leftover element
      else {
        const matchingElem = before || after
        for (const yKey of yKeys) iplElem[yKey] = matchingElem[yKey]
      }

      interpolated.push(iplElem)
    }

    return interpolated
  }
}
