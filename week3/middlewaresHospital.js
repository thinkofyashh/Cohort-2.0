const express=require("express")

const app=express()

app.get("/",function(req,res){
    const username=req.headers.username
    const pass=req.headers.pass
    const kidneyId=req.query.kidneyId
    if(!(username==="yash" && pass==="1234")){
        res.status(403).json({msg:"you are not authenticated"})
        return ;
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({msg:"your kidney is not fine."})
        return ;
    }

    res.send("your kidney is fine ")
})
app.listen(3000)