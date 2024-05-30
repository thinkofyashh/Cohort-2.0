import axios from "axios"
import { useEffect, useState } from "react"
function App() {

  const [count,setCount]=useState(0);
  let [inputValue,setInputValue]=useState(0);
  let [finalValue,setfinalValue]=useState(0)

function onClickHandler(){
  setCount(count+1)
}
// the problem with this apprach is as it causes unnessasry re rendering . everytime the input value change(it triggers re render) and everytime finalvalue changes (it again causes re renders).
useEffect(()=>{
  console.log("useEffect got called")
  let counting=0;
  for(let i=0;i<=inputValue;i++){
    counting=counting+i
  }
  setfinalValue(counting);
},[inputValue])
  return (
    <>  
    <button onClick={onClickHandler}>counter {count}</button> <br></br>
    <input placeholder="Enter the Number" onChange={function(e){
      setInputValue(e.target.value)
    }}></input>
    <br></br>
    <div>{finalValue}</div>
    </>
  )
}

export default App