
type arrType=number[];

function Maxvalue(arr:arrType):number{
    let maxi=arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi) maxi=arr[i];
    }
    return maxi;

}

console.log(Maxvalue([1,2,344,5,5]));

interface user{
    firstname:string ,
    lastname:string,
    age:number
}

function filterout(users:user[]):user[]{
   
    return users.filter(x=>x.age>=18)
        
}
console.log(filterout([{
    firstname:"yash",lastname:"rawat",age:12
},{
    firstname:"yash1",lastname:"rawat1",age:20
}])
);

