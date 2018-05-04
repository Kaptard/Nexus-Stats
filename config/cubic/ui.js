const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
const group = node ? node.split('-')[0] : null // auth-core, ui-core, etc, take first word before dash

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && (prod ? group === 'ui' : true)) {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').replace(/(\n|\r)+$/, '')
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const config = {
    api: {
      redisUrl,
      certPublic
    },
    core: {
      mongoUrl,
      mongoDb: 'nexus-ui',
      redisUrl
    },
    webpack: {
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    },
    client: {
      apiUrl: prod ? 'https://api.nexus-stats.com' : 'http://localhost:3003',
      authUrl: prod ? 'https://auth.nexus-stats.com' : 'http://localhost:3030'
    }
  }
  if (prod) {
    config.core.apiUrl = 'http://ui_api:3000'
    config.core.authUrl = 'http://auth_api:3030'
    config.core.userKey = fs.readFileSync('/run/secrets/nexus-ui-key', 'utf-8').replace(/(\n|\r)+$/, '')
    config.core.userSecret = fs.readFileSync('/run/secrets/nexus-ui-secret', 'utf-8').replace(/(\n|\r)+$/, '')
  }
  module.exports = config
}

// Normal environment should be fine with default config.
else {
  module.exports = {
    core: {
      mongoDb: 'nexus-ui'
    },
    webpack: {
      clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
      serverConfig: `${process.cwd()}/config/webpack/server.config.js`
    }
  }
}
