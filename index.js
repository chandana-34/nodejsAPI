let express = require('express')
let app = express()
const home = "u r in home page"
const movie = "u r in movie page"
const cricket = "u r in cricket page"
 
app.get("/update",(req,res) => 
 {
     res.send("data added")
     let fs = require('fs')
     let obj = "{name :chandana}"
     fs.writeFile('getdata.txt',obj,(err) =>
     {
         if(!err)
         {
             console.log("data added")
         }
     })
 })
 
 app.get("/home",(req,res) =>
 {
     res.send(home)
 })

 app.get("/movie",(req,res) =>
 {
     res.send(movie)
 })

 app.get("/cricket",(req,res) =>
 {
     res.send(cricket)
 })

 app.get("*",(req,res) =>
 {
     res.send("404 page error")
 })
 app.listen(3000,() =>
 {
     console.log("i am trying to connect with the server")
 })