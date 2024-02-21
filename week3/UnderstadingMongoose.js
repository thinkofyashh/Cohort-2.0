const mongoose=require("mongoose")
const express=require("express")
const app=express()
mongoose.connect("mongodb+srv://thinkofyash:18NovMonday@cluster0.xay1cqj.mongodb.net/userappnew")
const User=mongoose.model("Users",{name:String,email:String,password:String})
app.use(express.json())


app.post("/signup",async function(req,res){
    const username=req.body.username
    const email=req.body.email
    const pass=req.body.pass
    const user= new User({name:username,email:email,password:pass})
    const userExists=await User.findOne({email:email})
    if(userExists){
        return res.status(400).json({msg:"User already exists"})
    }
    user.save()
    res.json({msg:"user created successfully"})

})
app.listen(3000)
