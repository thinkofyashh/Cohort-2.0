interface User{
    name :string;
    age:number
    email:string ;
    address:string;
    phone :number;

}

type updatedUser=Pick<User,'name' | 'phone'>

type updatedUserOptional=Partial<updatedUser>

function display(User:updatedUserOptional):void{
    console.log(User.name);
}

console.log({name:'yash'})





