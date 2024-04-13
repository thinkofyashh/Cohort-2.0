const express=require("express")
const app=express()
const cors=require("cors")

app.use(cors())

app.get("/interest",function(req,res){
    const principal=parseFloat(req.query.principal)
    const rate=parseFloat(req.query.rate)
    const time=parseFloat(req.query.time)
    const interestamount=(principal*rate*time)/100
    const totalamount=principal+interestamount

    return res.json({total:totalamount,interest:interestamount})
})
app.listen(3000)