const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.get("/simpleInterest",function(req,res){
    const principal=parseFloat(req.query.principal)
    const time=parseFloat(req.query.time)
    const interest=parseFloat(req.query.interest)

    const simple=(principal*time*interest)/100;
    const total=principal+simple

    res.send({totalAmount:total,simpleAmount:simple})

})
app.listen(3000)