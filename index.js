"use strict"
const express = require('express');
const path = require('path');
const app = express();

const buttonsFile = require('./static/src/buttons')
const getWaterGallons = require('./server/handlers/getWaterGallons')
const getWaterBottles = require('./server/handlers/getWaterBottles')
const getWaterDollars = require('./server/handlers/getWaterDollars')
const update_from_database = require('./server/handlers/update_from_database')
const database_functions = require('./server/handlers/database_functions')

update_from_database.update()
setInterval(update_from_database.update, 10*1000)

// Set static folder
// for static server, routes end in .html (ie http://localhost:5500/home.html)
app.use(express.static(path.join(__dirname, 'static')));

app.get('/current_water_flow', getWaterGallons.getWater)
app.get('/current_water_bottles', getWaterBottles.getWater)
app.get('/current_dollars', getWaterDollars.getWater)
app.get('/water_records', database_functions.selectAll)
// Format for :start_time and :end_time
// YYYY-MM-DDThh:mm:ss.000Z
app.get('/water_records/start/:start_time/end/:end_time', database_functions.selectDate)


// set up main page
app.get('/',function(req, res){
    res.sendFile(__dirname+'/static/landing_page.html')
})

app.get('/landing_page',function(req, res){
    res.sendFile(__dirname+'/static/landing_page.html')
})

app.get('/benefits',function(req, res){
    res.sendFile(__dirname+'/static/benefits.html')
})

app.get('/explore_rainwater',function(req, res){
    res.sendFile(__dirname+'/static/explore_rainwater.html')
})

app.get('/game',function(req, res){
    buttonsFile.playGame()
    res.sendFile(__dirname+'/static/game.html')
})

app.get('/static/src/game.js',function(req, res){
    buttonsFile.playGame()
    res.sendFile(__dirname+'/static/src/game.js')
})

const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
