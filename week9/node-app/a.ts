// creating function in the typescript 

function greet (firstname: string){
    return console.log("hello "+firstname);
}

//creating a function to find out sum of two number.
function sum(a:number , b:number):number{
    return a+b;
}

const value:number=sum(2,3);
console.log(value);

greet("world")

// creating function to check your age is legal or not .
function isLegal(age:number):Boolean{
    if(age>=18){return true;}
    else{
        return false;
    }

}

console.log(isLegal(20));

// passing a function as a argument so that a function runs after 1 sec .
function after1sec(fnc:()=>void){
    setTimeout(fnc,1000);
}
after1sec(function(){
    console.log("hello after 1 sec")
})