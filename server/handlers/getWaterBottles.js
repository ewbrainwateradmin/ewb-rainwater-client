"use strict"

const fs = require("fs")
const path = require("path")

function getWater(req, res) {
  try {
    //Read data from text file
    fs.readFile(path.resolve(__dirname, "water.txt"), (err, data) => {
      if (err) throw err

      // Using 16 fl.oz. as a "water bottle"
      
      var bottles = parseInt(data.toString())*8
      res.set('Content-Type', 'application/json')
      res.status(200).send({'bottles_saved': bottles})
    })

  } catch (err) {
    res.status(500).send({error: err.message})
  }
}

module.exports = {getWater}
