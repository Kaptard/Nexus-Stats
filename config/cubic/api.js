const prod = process.env.NODE_ENV === 'production'
const node = process.env.NEXUS_TARGET_NODE
let config = { api: {} }

// Use some adaptions when inside docker, especially database connections.
if (process.env.DOCKER && prod && node === 'api') {
  const fs = require('fs')
  const certPublic = fs.readFileSync(`/run/secrets/nexus-public-key`, 'utf-8')
  const dbSecret = fs.readFileSync(`/run/secrets/mongo-admin-pwd`, 'utf-8').trim()
  const mongoUrl = `mongodb://admin:${dbSecret}@mongo/admin?replicaSet=nexus`
  const redisUrl = 'redis://redis'
  const userKey = fs.readFileSync(`/run/secrets/nexus-cubic-key`, 'utf-8').trim()
  const userSecret = fs.readFileSync(`/run/secrets/nexus-cubic-secret`, 'utf-8').trim()
  config = {
    redisUrl,
    certPublic,
    mongoUrl,
    apiUrl: `ws://api:3003/ws`,
    authUrl: `ws://auth:3030/ws`,
    userKey,
    userSecret
  }
}

config = {
  ...config,
  ...{
    mongoDb: 'nexus-api',
    endpointPath: `${process.cwd()}/api/`,
    endpointPathExclude: /\/lib/
  }
}

module.exports = config
