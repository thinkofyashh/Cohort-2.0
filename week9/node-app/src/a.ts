import { number, object } from "zod";

const user:User={
    firstname:"yash",
    lastname:"rawat",
    email:"yashrawat682@gmail.com",
    age:22
};
interface User{
    firstname:string,
    lastname:string,
    email?:string,
    age:number
};
function isLegal(user:User):Boolean{
    if(user.age > 18) return true;
    else return false;
}
function greet(user:User):void{
console.log(user.firstname);
}

greet(user);

    


