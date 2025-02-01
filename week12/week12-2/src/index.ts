

interface User{
    id:number;
    name:string;
    email:string;
}

type Users=Record<number,User>;


const userArr:Users={
    1:{id:1,name:"John",email:"john@example.com"},
    2:{id:2,name:"Jane",email:"jane@example.com"},
}

console.log(userArr);









