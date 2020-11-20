"use strict"
​
const express = require("express")
const app = express()
​
const port = process.env.PORT || "80"
​
app.get('/', (req, res) => {
  // Do a thing
})
​
app.listen(port, () => {
  console.log(`Listening on :${port}`)
})



// Initialise an instance of our router class.
//const router = require('./router')

//router.router
//const router = new Router(routes);