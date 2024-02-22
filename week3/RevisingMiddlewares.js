const express=require("express")
const app=express()
function oldEnough(age){
    if(age>=14){
        return true
    }else{
        return false
    }
}
app.get("/ride1",function(req,res){
    const age =req.query.age;
    if(!oldEnough(age)){
        return res.json({msg:"you cant ride this ride because you are not long enough"})

    }
    res.json({msg:" you can successfully ride this  "})
})
app.get("/ride2",function(req,res){
    const age =req.query.age;
    if(!oldEnough(age)){
        return res.json({msg:"you cant ride this ride because you are not long enough"})

    }
    res.json({msg:" you can successfully ride the ride 2 "})
})
app.listen(3000)