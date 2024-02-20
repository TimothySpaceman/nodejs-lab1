const os = require('os')

const username = os.userInfo().username
const message = `Hello, ${username}!`

console.log(message)