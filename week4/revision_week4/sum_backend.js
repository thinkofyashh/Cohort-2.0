const express=require("express")
const cors=require("cors")
const app=express()

app.use(cors())

app.get("/",function(req,res){
    const first=parseInt(req.query.first)
    const second=parseInt(req.query.second)

    const ans=first+second

    res.send(ans.toString())

})
app.listen(3000)