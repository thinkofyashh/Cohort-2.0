console.log("Arrows")
function sum(a,b){
    return a+b;
}

const sums=(a,b) =>{console.log(a+b)}

const ans=sum(4,2);
console.log(ans)
sums(2,2);

console.log("Filters")

// given an array [1,2,3,4,5] convert it into an array [2,4,6,8,10].
// dumb way of doing it .
const initialArray=[1,2,3,4,5];
let finalArray=[]
for(let i=0;i<initialArray.length;i++){
    finalArray.push(initialArray[i]*2)
}
console.log(finalArray)

// other Solution

const initial=[1,2,3,4,5]
let final=initial.map((i)=> {return i*2})
console.log(final)

console.log("Filter")
// given an array filter out the even number form the array .
let finalArr=[];
for(let i=0;i<initial.length;i++){
    if(initial[i]%2==0){
        finalArr.push(initial[i])
    }
}
console.log(finalArr)

// filter way 
let finalA=initialArray.filter((n)=>{
    if(n%2==0){return true;}
    else return false;
})
console.log(finalA)