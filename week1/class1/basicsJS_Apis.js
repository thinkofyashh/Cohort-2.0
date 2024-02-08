// STRINGS 

// length
const Name="yash rawat"
console.log(Name.length)

const fname="yash  "
console.log(fname[3])

// indexOf
console.log(Name.indexOf("awat"))

// Slice (1,3]
console.log(Name.slice(1,3))

// last indexOf
const str="hello world world world"
console.log(str.lastIndexOf("w"))

// replaceString

const str1="hello world";
console.log(str1.replace("world","Javascript"))

// split
const str2="hello,world,hey,wassup";
console.log(str2.split(""))

// uppercase and lowercase 

const str3="hello my name is yash rawat";
console.log(str3.toLowerCase())
console.log(str3.toUpperCase())

// trims 

const str4="    hello my name is yash   "
console.log(str4.trim())

// so far
/*
strings - lenght,indexOf,lastIndexOf,slice,trim,split,topuuercase,tolowercase,replaceString.
*/

//numbers
const str5="32";
const str6="jahvsj65"
const str7="32kjnf"
const str8="323.243"
console.log(parseInt(str5),parseInt(str6),parseInt(str7),parseInt(str8))

//Arrays

//Push and Pop
let arr=[12,3,4,21,342,2,34]
arr.push(222);
console.log(arr)
arr.pop();
console.log(arr)

//shift 
arr.shift()
console.log(arr)

//unshift
arr.unshift(1,2,3,44)
console.log(arr)

//concat 
let initialArray=[123,12,424,25,235,235,2532,5532,131]
let secondArray=[424,235,35231,532325,332,3552,23]
let finalArray=initialArray.concat(secondArray)
console.log(finalArray)

// forEach
finalArray.forEach(function(i){
    console.log(i)
})


//classes

// why we need classes ?
const bottle1={
    colour:"yellow",company:"Dublin",shape:"cylinder"
}
const bottle2={
    colour:"yellow",company:"milton",shape:"circle"
}

function bottles(bottle){
    console.log("Bottle 1 has a colour of "+bottle["colour"]+" and the company name is "+bottle["company"]+" and the shape of the bottle is "+bottle["shape"])
}
//console.log("Bottle 1 has a colour of "+bottle1["colour"]+" and the company name is "+bottle1["company"]+" and the shape of the bottle is "+bottle1["shape"])
//console.log("Bottle 2 has a colour of "+bottle2["colour"]+" and the company name is "+bottle2["company"]+" and the shape of the bottle is "+bottle2["shape"])
bottles(bottle2)

// classes creates a bluePrint of an object.

class WaterBottle{
    constructor(colour,price,company,shape){
        this.colour=colour;
        this.price=price;
        this.company=company;
        this.shape=shape;
    }

    prices(){
        console.log("price of the bottle is "+this.price)
    }
    colours(){
        console.log("colour of the bottle is "+this.colour)
    }
}
console.log("classes")
let WaterBottle1=new WaterBottle("yellow",233,"milton","cylinder");
WaterBottle1.colours()
let WaterBottle2=new WaterBottle("yellow",213,"Dublin","circle");
WaterBottle2.prices()

//static functions
class Building{
    constructor(colour,price,company,shape){
        this.colour=colour;
        this.price=price;
        this.company=company;
    }
    static shape(){
        console.log("Rectangle");
    }
    prices(){
        console.log("price of the bottle is "+this.price)
    }
    colours(){
        console.log("colour of the bottle is "+this.colour)
    }
}

// static funcation in the class is something that can be called on the class itself.

Building.shape()

//Dates 
const currentDate=new Date()
console.log(currentDate)
console.log(currentDate.getDate())
console.log(currentDate.getFullYear())
console.log(currentDate.getMonth()+1)
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())
console.log(currentDate.getTime())
console.log(currentDate.getTime())

// calculate the execution time for the program.
let beforeExecution=new Date();
beforeTime=beforeExecution.getTime();

function greeting(){
    console.log("hello my name is yash rawat. and i am software engineer")
}
for(let i=0;i<1000000;i++){


}

let afterExecution=new Date();
afterTime=afterExecution.getTime();

console.log(afterTime-beforeTime)

//counter 
function counter(){
    let currentTime=new Date();
    let time=currentTime.getTime()
    console.log(time)
}
//setInterval(counter,1000)

// JSON
// it consist of the JSON parse,JSON stringify

const Allusers={
    fname:"yash",age:12,lname:"rawat"
}
const str10=JSON.stringify(Allusers)
console.log(JSON.parse(str10))

// Objects
const obj={
    key1:"value1",key2:"value2",key3:"value3"
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty("name"))
console.log(obj.hasOwnProperty("key1"))



