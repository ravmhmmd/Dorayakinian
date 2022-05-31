const express = require("express");
const db = require('./models/model');
const home = require('./routers/home');
const login = require('./routers/loginregis')
const resep = require('./routers/resep')
const backendrouter = require('./routers/backendrouter')
// const sendEmail = require('./sendEmail')
const app = express();


app.use(express.json())
app.use(express.urlencoded())
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Headers","*")
  next()
})
app.use(home)

//database connect init
db.connect()

app.use(resep)
app.use(login)
app.use(backendrouter)
// db.query('SELECT stok as solution from bahan_baku natural join resep_bahan natural join resep', function (err, rows, fields) {
//   if (err) throw err
  
//   console.log('The solution is: ', rows[0].solution)
// })

// db.end()
app.listen(3300,()=>{
    console.log('server is listening on 3300')
})


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`))