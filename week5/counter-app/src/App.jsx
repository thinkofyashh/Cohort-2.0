// we first initialised the state .
import { useState } from "react";


function App() {
//initialising the state .
const [count,setCount]=useState(0);
//updating the state
  function onClickHandler(){
    setCount(count+1)
  }
  return (
    // defining component .
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

export default App
