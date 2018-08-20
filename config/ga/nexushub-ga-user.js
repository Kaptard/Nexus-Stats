const docker = process.env.NODE_ENV === 'production' && process.env.DOCKER

module.exports = {
  email: 'company-page@nexushub-ga.iam.gserviceaccount.com',
  clientId: '116601860147515971555',
  key: docker ? '/run/secrets/nexus-ga-key' : `${__dirname}/nexushub-ga-private.pem`,
  ids: 'ga:126211225'
}
