const fs = require('fs')

const fileName = "playground/task02.txt"
const message = "Hello, World!\n"

fs.appendFile(fileName, message, (err) => {
    console.log(err || "Another line added!")
})