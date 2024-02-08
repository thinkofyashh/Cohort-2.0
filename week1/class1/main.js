let fname="yash"
let lname="rawat"
console.log("hello my name is "+fname+" "+lname+" and i am software eng.")
let isMarried=false;

if(isMarried){
    console.log(fname+" "+lname+" is married")
}else{
    console.log("yash rawat is not married")
}

// counting the number from 1 to 6 

let answer =0
for(let i=1;i<=6;i++){
    answer=answer+i;
}
console.log(answer)

// write the program that prints all the even number in an array

let numberArray=[1,2,3,4,13,214,242,1421412,24,12214,131,132]
const len=numberArray.length
for(let i=0;i<len;i++){
    if(numberArray[i]%2==0){
        console.log(numberArray[i])
    }
}

// write a program to print the biggest number in an array

let maxi =numberArray[0]
for(let i=0;i<len;i++){
if(numberArray[i]>maxi){
    maxi=numberArray[i]
}
}
console.log("The biggest number in the array is "+ maxi)

//objects 
const user1={
    fname:"yash",gender:"male"
}
const user2={fname:"rawat",gender:"male"}
const user3={fname:"daksh",gender:"male"}
const user4={fname:"priya",gender:"female"}
console.log(user3)

// creating an array of an objects
// In this array print only the male candidates.
const allUsers=[{fname:"yash",gender:"male"},{fname:"rawat",gender:"male"},{fname:"daksh",gender:"male"},{fname:"priya",gender:"female"}]
const allUserslen=allUsers.length
for(let i=0;i<allUserslen;i++){
    if(allUsers[i].gender=="male"){
        console.log(allUsers[i].fname)
    }
}
console.log("All candidate last name")
const allUsersExtended=[{fname:"yash",gender:"male",metaData:{age:21,lname:"ssw"}},{fname:"rawat",gender:"male",metaData:{age:23,lname:"mehta"}},{fname:"daksh",gender:"male",metaData:{age:43,lname:"balyaN"}},{fname:"priya",gender:"female",metaData:{age:77,lname:"aggarwal"}}]

for(let i=0;i<allUsersExtended.length;i++){
    if(allUsersExtended[i].gender=="male"){
        console.log(allUsersExtended[i].metaData.lname)
    }
}

//functions 
function sum(a,b){
    return a+b;
}

console.log("functions")
let result= sum(3,2);
console.log(result)

// callbacks (passing funcation as a arguments inside the function)
console.log("callbacks")
function Sum(a,b,fntoCall){
    fntoCall(a+b);
}

function Displayresult(data){
    console.log("your ans is "+data)
}

function DisplayresultAlternative(data){
    console.log("sum of your answer is "+data)
} 

console.log(sum(3,2 ,Displayresult)) 

// another example of callbacks function 

// without callbacks and functions
function arithmeticOperation(a,b,type){
    if(type=="sum"){
        return a+b
    }
    if(type=="minus"){
        return a-b
    }

}
console.log(arithmeticOperation(12,32,"sum"))
console.log(arithmeticOperation(32,32,"minus"))

// without callbacks and with functions

function arithmetic(a,b,type){
    if(type=="sum"){
        const result=sum(a,b);
        console.log(result)
    }
    if(type=="minus"){
        const result =minus(a,b)
        console.log(result)
    }
}
function minus(a,b){
    return a-b;
}
arithmetic(32,313,"sum")

// now with callbacks 
function arithmeticopearation(a,b,fnToCall){
    fnToCall(a,b);
}

function Addition(a,b){
    console.log(a+b)
}
function substraction(a,b){
    console.log(a-b)
}
arithmeticopearation(2,3,Addition)

// setTimout function
console.log("setTimeout")
function greet(){
    console.log("hello Yash !!!!")
}

setTimeout(greet,3*1000)

//setInterval
console.log("set interval")




