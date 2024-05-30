import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [count,setCount]=useState(0);
    // Your solution starts here
    let expensiveValue = 1;
    let ans=useMemo(()=>{
        console.log("usememo got called")
        let ans=1; 
    for(let i=1;i<=input;i++){
        ans=ans*i;
    }
    return ans;
    },[input])
    expensiveValue=ans;
    // Your solution ends here

    function onClickHandler(){
        setCount(count+1)
    }


    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
            <button onClick={onClickHandler}>Click me {count}</button>
        </div>
    );
}