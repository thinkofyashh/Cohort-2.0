const zod=require("zod");
const express=require("express")
const app=express()
function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(5),
    })
    const response=schema.safeParse(obj)
    return response
}
app.use(express.json())
app.post("/",function(req,res){
    const response=validateInput(req.body)
    if(!response.success){
        res.send("Inputs are invalid")
    }else{
        res.send("successfully login")
    }

})
validateInput({
    email:"yashrawat682@gmail.com",password:"12345",country:"India"
})

app.listen(3000)