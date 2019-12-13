const Endpoint = require('cubic-api/endpoint')

/**
 * Provides basic information about the last saved scan.
 */
class ScansLast extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get basic information about the last saved scan.'
    this.schema.url = '/wow-classic/v1/scans/latest/:slug'
    this.schema.request = { url: '/wow-classic/v1/scans/latest/anathema-alliance' }
    this.schema.response = {
      scanId: String,
      scannedAt: String
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const slug = req.params.slug
    const scan = await this.db.collection('scans').findOne({ slug }, { projection: { _id: 0, scanId: 1, slug: 1, scannedAt: 1 }, sort: { scannedAt: -1 } })

    if (scan) res.send(scan)
    else {
      const response = {
        error: 'Not found.',
        reason: `Scans for ${slug} could not be found. Either there are no scans for that realm, or that realm doesn't exist.`
      }
      // this.cache(response, 60) TODO: Uncomment this
      // res.status(404).send(response)
      res.send(response)
    }
  }
}

module.exports = ScansLast
