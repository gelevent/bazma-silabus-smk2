const fs = require('fs')

// fs.writeFileSync("perkenalan.txt", "Perkenalkan saya Hafith")
// console.log(fs)

const perkenalan = fs.readFileSync("perkenalan.txt")
console.log(perkenalan.toString())