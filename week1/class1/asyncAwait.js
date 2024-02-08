const fs=require("fs");

function yashReadfile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data)
        })
    })
}



async function main(){

    let res= await yashReadfile();
    
    console.log(res)
    console.log("this is after await function.")

}
main();
console.log("this is my main thread . and the good practice is to not block our main thread.")