let fs = require('fs')
let autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'))

let concesionaria = {
    autos: autosDB
}

module.exports = concesionaria