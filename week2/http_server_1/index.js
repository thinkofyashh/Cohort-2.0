const express = require('express')
const bodyParser=require("body-parser")
const app = express()
const port = 3000
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get("/yash",function(req,res){
    res.json({name:"yash rawat",age:22})
})

app.post("/conversation",function(req,res){
    console.log(req.body);
    console.log(req.headers["authorization"])
    res.json({
        msg:"hello this is what backend is sending."
    })
})

app.listen(port)