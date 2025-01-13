interface Person{
    name: string,
    age:number
    greet(phrase:string):void
};

class Employee implements Person{
    name: string;
    age:number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    greet(phrase:string):void{
        `${this.name} ${phrase}`;
    }

}
const e = new Employee("yash",21);
console.log(e.name);
    


