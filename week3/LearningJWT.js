const express=require("express")
const jwt=require("jsonwebtoken")
const jwtPassword="123456"

const app=express()
const users=[{username:"yashrawat682@gmail.com",password:"123",name:"yash rawat"},{username:"raman@gmail.com",password:"123321",name:"raman bhalla"},{username:"priyasingh@gmail.com",password:"123321",name:"Priya agg"}];
function userExists(username,password){
    for(let i=0;i<users.length;i++){
        if(username==users[i].username && password==users[i].password){
            return true
        }
    }
    return false;
}
app.use(express.json())
app.post("/signup",function(req,res){
    const username=req.body.username
    const password=req.body.password
    if(!userExists(username,password)){
       return res.status(403).json({
            msg:"User dont exist "
        })
    }
    var token=jwt.sign({username:username},"123456");
    return res.json({token})
})

app.get("/users",function(req,res){
    const token=req.headers.authorization
    try{
        const decode=jwt.verify(token,jwtPassword)
        const username=decode.username
        res.json({user:users.filter(function(value){
            if(value.username==username){return false}else{return true}
        })})
    }catch(err){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
})
app.listen(3000)