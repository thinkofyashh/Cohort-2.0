const express=require("express")
const zod=require("zod")
const app=express()

const schema=zod.array(zod.number())
app.use(express.json())
app.post("/",function(req,res){
    const kidneys=req.body.kidneys
    const response=schema.safeParse(kidneys)
    //const kidneyLength=kidneys.length;
    if(!response.success){
        res.status(403).json({
            "msg":"Incorrect Input Validation"
        })  
    }else{
        res.send({response})

    }
   
})
/*app.use(function(err,req,res,next){
    res.status(500).json({
        "msg":"Something is Wrong Sorry For Inconvenince caused"
    })
})
*/
app.listen(3000)