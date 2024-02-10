const express=require("express")
const port=3000;
const app=express();


app.use(express.json());


var users=[{name:"yash",kidneys:[{healthy:true},{healthy:false}]}]


// kidney information of the users 
app.get("/",function(req,res){
    const totalNumbersKidneys=users[0].kidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<totalNumbersKidneys;i++){
    if(users[0].kidneys[i].healthy==true){
        numberOfHealthyKidneys++;
    }
}
const numberOfUnhealthyKidneys=totalNumbersKidneys-numberOfHealthyKidneys;
res.json({
    totalNumbersKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys
})

})
// user can add new kidneys .
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"Done!"
    })

})
// update all the kidneys to healthy
app.put("/",function(req,res){
for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy==false){
        users[0].kidneys[i].healthy=true;
    }
}
res.json({
    msg:"yeah bhi done hai"
})

})

app.delete("/",function(req,res){

    if(isThereAtLeastOneHealthyKidneys()){
        var newKidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy==true){
            newKidneys.push({healthy:true})

        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"delete req"})
    }else{
        res.status(411).send("There is no unHealthy kidneys.")
    }
    
})

function isThereAtLeastOneHealthyKidneys(){
    let atleastOneHealthyKidneys=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy==false){
            atleastOneHealthyKidneys=true;
        }
    }
    return atleastOneHealthyKidneys;
}
app.listen(3000);

