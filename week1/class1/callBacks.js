//callbacks
// @ why we need the callbacks ?
function square(n){
    return n * n;
}

function cube(n){
    return n*n*n;
}
// you can see certain repeatation in the code . 
function sumofSquares(a,b){
    const val1=square(a);
    const val2=square(b);
    return val1 + val2;
}

function sumofCubes(a,b){
    const val1=cube(a);
    const val2=cube(b);
    return val1+val2;

}

console.log(sumofSquares(2,2))

// to solve this issue we can use callbacks .
function sum(a,b,fnToCall){
    const val1=fnToCall(a)
    const val2=fnToCall(b)
    return val1 + val2;
}

console.log(sum(2,2,square))
console.log(sum(2,2,cube))

// anonymous function 

console.log(sum(2,2,function(n){
    return n*n*n*n;
}))