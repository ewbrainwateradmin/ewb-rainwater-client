"use strict"

const fs = require("fs")
const path = require("path")

function getWater(req, res) {
  try {
    //Read data from text file
    fs.readFile(path.resolve(__dirname, "water.txt"), (err, data) => {
      if (err) throw err

      // https://www.seattle.gov/utilities/businesses-and-key-accounts/water/rates/commercial-water-rates
      // For commercial users in non-peak months, 100 ft^3 = $5.40
      // 100 ft^3 = 748 gallons

      var dollars = (parseFloat(data.toString())*.00722).toFixed(2)
      res.set('Content-Type', 'application/json')
      res.status(200).send({'dollars_saved': dollars})
    })

  } catch (err) {
    res.status(500).send({error: err.message})
  }
}

module.exports = {getWater}
