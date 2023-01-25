"use strict"

const fs = require("fs")
const path = require("path")
const database_functions = require("./database_functions.js")

function update() {
  try {
    // Get value (replace with database eventually)
    var water = Math.floor(500*Math.random()+10000)

    // Write to text file
    fs.writeFile(path.resolve(__dirname, "water.txt"), water.toString(), (err) => {
      if (err) throw err
    })
    // Write data to database
    database_functions.insertData(water)
      .then((message) => {console.log(message)})
      .catch((message) => {console.log(message)})

  } catch (err) {console.log(err.message)}
}

module.exports = {update}
