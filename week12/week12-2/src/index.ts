

interface User{
    id:number;
    name:string;
    email:string;
}

type roles='admin'|'developers'|'manager';

function allowedRoles(role:Exclude<roles,'manager'>):void{
    console.log('You are allowed to access this page');
}












