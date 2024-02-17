const express=require("express")
const app=express();


function userMiddlewares(req,res,next){
    const username=req.headers.username;
    const pass=req.headers.pass;
    if(username!="yash" || pass != 1234){
        res.json({
            msg:"wrong credentials"
        })
    }else{
        next()
    }

}
function kidneyMiddlewares(req,res,next){
    const kidneyId=req.query.kidneyId
    if(kidneyId!=1 && kidneyId!=2){
        res.json({msg:"wrong inputs"})
    }else{
        next()
    }
}
app.use(userMiddlewares,kidneyMiddlewares)
app.get("/",function(req,res){

    res.json({
        msg:"your kidney is good ."
    })
})

app.listen(3000)
