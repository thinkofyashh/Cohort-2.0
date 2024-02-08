function myOwnSetTimeout(duration){
    const p= new Promise(function(resolve){
        setTimeout(function(){
            resolve(console.log("hello there"))
        },duration)
    })
    return p;
}
const ans=myOwnSetTimeout(1000);
console.log(ans)