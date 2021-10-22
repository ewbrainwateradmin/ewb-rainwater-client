"use strict"
const express = require('express');
const path = require('path');
const app = express();

// Set static folder
// for static server, routes end in .html (ie http://localhost:5500/home.html)
app.use(express.static(path.join(__dirname, 'static')));

// set up main page
app.get('/',function(req, res){
    res.sendFile(__dirname+'/static/landing_page.html')
})

const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
