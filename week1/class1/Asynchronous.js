const fs=require("fs");
// As you can see we can delegate the task.and continue doing the task in our main task.
console.log("Start")
setTimeout(function(){
    console.log("hello world")
},1000)
console.log("End")

// reading a file 
// this is also an async function .
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("reading a file")

// creating our async function asctually wrapping it on my async function 
function yashReadFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    })
}
function onDone(data){
    console.log("data:"+ data)
}

yashReadFile(onDone)
console.log("i have delegated task to maggi.maggi is reading the file")
console.log("maggi : ")
