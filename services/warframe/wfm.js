/**
 * Get item offers from warframe.market in realtime, similar to the trade chat.
 */
const WebSocket = require('ws')
const getClient = require('../getClient.js')
const prod = process.env.NODE_ENV === 'production'
if (prod) {
  process.on('uncaughtException', () => process.exit(1))
  process.on('unhandledRejection', () => process.exit(1))
}

async function monitor () {
  // Init local client
  const client = await getClient()

  // Init items
  let items
  try { items = await client.get('/warframe/v1/items') } catch (err) {}
  setInterval(async () => {
    try {
      items = await client.get('/warframe/v1/items')
    } catch (err) {}
  }, 1000 * 60)

  // Init websocket
  const ws = new WebSocket('wss://warframe.market/socket')
  ws.on('open', () => {
    ws.send(JSON.stringify({ type: '@WS/SUBSCRIBE/MOST_RECENT' }))
  })
  ws.on('message', data => {
    data = JSON.parse(data)
    if (data.type === '@WS/SUBSCRIPTIONS/MOST_RECENT/NEW_ORDER') postOrder(data.payload.order, items, client)
  })
}

async function postOrder (order, items, client) {
  if (order.platform === 'pc') {
    let matchedItem
    let matchedComponent

    // Find corresponding item
    for (let item of items) {
      if (!item.components.find(c => c.name === 'Set').tradable) continue

      const itemName = item.name.split(' ')
      const orderName = order.item.en.item_name.split(' ')

      // Removes parenthesised item names additives from WFM, e.g. (Veiled)
      const regexParentheses = /\(([^)]+)\)/
      if (regexParentheses.exec(orderName[orderName.length - 1])) orderName.pop()

      // Compare items without component (if it has one) and set it
      let component = 'Set'
      if (itemName.length !== orderName.length) component = orderName.pop()
      if (itemName.join() === orderName.join()) {
        matchedItem = item.name
        matchedComponent = component
        break
      }
    }

    if (matchedItem && matchedComponent) {
      try {
        await client.post('/warframe/v1/orders', {
          user: order.user.ingame_name,
          offer: order.order_type === 'sell' ? 'Selling' : 'Buying',
          item: matchedItem,
          component: matchedComponent,
          price: order.platinum,
          rank: order.mod_rank,
          quantity: order.quantity,
          source: 'Warframe Market',
          platform: order.platform.toUpperCase(),
          wfmName: order.item.url_name,
          createdAt: order.creation_date
        })
        if (prod) console.log(`${order.user.ingame_name}: ${order.offer} ${matchedItem} ${matchedComponent} ${order.platinum}p`)
      } catch (err) {} // just try again later, these are usually issues when bootstrapping
    }
  }
}

monitor()
