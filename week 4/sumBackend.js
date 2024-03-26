const express=require("express")
const app=express()



app.get("/sum",function(req,res){
    const first=parseInt(req.query.first)
    const second=parseInt(req.query.second)
    const result=first+second;
    res.send(result.toString())
})
app.listen(3000)
