import axios from "axios"
import { useEffect, useState } from "react"
function App() {

  const [count,setCount]=useState(0);
  let [inputValue,setInputValue]=useState(0);

function onClickHandler(){
  setCount(count+1)
}

function findSum(val1){
  inputValue=0;
  for(let i=0;i<=val1;i++){
    inputValue=inputValue+i;
  }
  return inputValue;
  

}
  return (
    <>  
    <button onClick={onClickHandler}>counter {count}</button> <br></br>

    <input placeholder="Enter the Number" onChange={function(e){
      const val1=e.target.value
      const ans=findSum(val1);
      setInputValue(ans)
    }}></input>
<br></br>
    {inputValue}

    


    </>
  )
}

export default App