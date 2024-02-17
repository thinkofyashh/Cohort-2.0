const express=require("express")
const app=express()
app.use(express.json())
app.post("/",function(req,res){
    const kidneys=req.body.kidneys
    const kidneyLength=kidneys.length;
    res.send("your have "+ kidneyLength +  " kidneys.")

})
app.use(function(err,req,res,next){
    res.status(500).json({
        "msg":"Something is Wrong Sorry For Inconvenince caused"
    })
})
app.listen(3000)