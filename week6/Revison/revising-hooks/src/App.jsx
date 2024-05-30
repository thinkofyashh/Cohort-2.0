import axios from "axios"
import { useEffect, useMemo, useState } from "react"
function App() {

  const [count,setCount]=useState(0);
  let [inputValue,setInputValue]=useState(0);

function onClickHandler(){
  setCount(count+1)
}


let counting =useMemo(()=>{
  console.log("use memo gets called ")
  let counting=0;
  for(let i=0;i<=inputValue;i++){
    counting=counting+i
  }
  return counting

},[inputValue])
  return (
    <>  
    <button onClick={onClickHandler}>counter {count}</button> <br></br>
    <input placeholder="Enter the Number" onChange={function(e){
      setInputValue(e.target.value)
    }}></input>
    <br></br>
    <div>{counting}</div>
    </>
  )
}

export default App