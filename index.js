"use strict"
const express = require('express');
const path = require('path');
const got = require('got');
const app = express();

// Set static folder
// for static server, routes end in .html (ie http://localhost:5500/home.html)
app.use(express.static(path.join(__dirname, 'static')));

(async () => {
  try {
    // Take out manual port entry
    const response = await got('http://ewb-rainwater-server:80/current_dollars')
    console.log(response.body)
  } catch (error) {
    console.log(error.message);
  }
})();

// set up main page
app.get('/',function(req, res){
    res.sendFile(__dirname+'/static/index.html')
})

const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
