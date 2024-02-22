const express=require("express")
const app=express()
function oldEnoughMiddlewares(req,res,next){
    const age=req.query.age
    if(age>=14){
        next()
    }else{
        return res.status(400).json({msg:"you cant ride this ride beacuse you are not eligible for it ."})
    }
}
app.use(oldEnoughMiddlewares);
app.get("/ride1",function(req,res){    
    res.json({msg:" you can successfully ride this  "})
})
app.get("/ride2",function(req,res){ res.json({msg:" you can successfully ride the ride 2 "})
})
app.listen(3000)