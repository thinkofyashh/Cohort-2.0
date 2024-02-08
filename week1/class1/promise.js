const fs=require("fs");

function yashReadFile(cb){
    console.log("hello i am inside the yashReadFile function ")
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
            console.log("after resolved")
        })
        console.log("promise end")
    })
}

function onDone(data){
    console.log(data);
}

var a=yashReadFile()
console.log(a)
a.then(onDone)
console.log("maggi has given me promise that he will the read the file.")






