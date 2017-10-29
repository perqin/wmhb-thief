const Wechaty = require('wechaty').Wechaty
const wechaty = Wechaty.instance()

wechaty.on('scan', (url, code) => {
  console.log(`Scan QR Code to login: ${code}\n${url}`)
})

wechaty.on('login', user => {
  console.log(`User ${user} logged in`)
})

wechaty.on('message', message => {
  console.log(`Message: ${message} with content: ${message.content()}`)
})

wechaty.init()
