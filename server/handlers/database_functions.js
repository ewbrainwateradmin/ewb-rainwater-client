"use strict"

const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'ewb-rainwater-database',
  port: '3306',
  user: 'root',
  password: 'ewb2020',
  database: 'mysql'
})

con.connect((err) => {
  if (err) throw err
  console.log("Connected")
})

function insertData(water_amount) {
  return new Promise((resolve, reject) => {
    try {
      var sql = `INSERT INTO WATER_SAVED (entry_time, water_amount) VALUES (NOW(), ${water_amount})`
      con.query(sql, (err, result) => {
        if (err) throw err
        resolve("Record Inserted")
      })
    } catch (err) {reject(err.message)}
  })
}

function wrappedSelectAll() {
  return new Promise((resolve, reject) => {
    try {
      var sql = `SELECT entry_time, water_amount FROM WATER_SAVED`
      con.query(sql, (err, result) => {
        if (err) throw err
        var value = {'water_records': result}
        resolve(value)
      })
    } catch (err) {reject(err.message)}
  })
}

function selectAll(req, res) {
  wrappedSelectAll()
    .then((value) => {res.status(500).send(value)})
    .catch((value) => {res.status(200).send(value)})
}

function editDatetime(date_str, buffer) {
  // Add buffer time to a date object to account for unspecified time interval
  // Buffer in minutes
  var date_obj = new Date(date_str)
  var new_date_obj = new Date(date_obj.getTime() + buffer*60000)
  return new_date_obj.toISOString()
}

function wrappedSelectDate(start_time, end_time) {
  return new Promise(function(resolve, reject) {
    try {
      var mod_start_time = editDatetime(start_time, -30)
      var mod_end_time = editDatetime(end_time, 30)
      var sql = `SELECT SUM(water_amount) AS total_water FROM WATER_SAVED WHERE entry_time >= '${mod_start_time}' AND entry_time <= '${mod_end_time}'`
      con.query(sql, (err, result) => {
        if (err) throw err
        var value = {result, "start_time": start_time, "end_time": end_time}
        resolve(value)
      })
    } catch (err) {reject(err.message)}
  })
}

function selectDate(req, res) {
  var start_time = req.params.start_time
  var end_time = req.params.end_time
  wrappedSelectDate(start_time, end_time)
    .then((value) => {res.status(200).send(value)})
    .catch((value) => {res.status(500).send(value)})
}

module.exports = {insertData, selectAll, selectDate}
