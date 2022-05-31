// const express = require('express')
const mysql = require('mysql')
module.exports = mysql.createConnection({  
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pabrikdorayaki',
  multipleStatements:true
})
