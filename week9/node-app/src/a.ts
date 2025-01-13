type Person={
    firstname:string,
    lastname: string,
    age: number,
}


function greet(id:(string | number)):void{
    console.log(`Hello, ${id}`);
}

greet(12);
greet("12");
    


