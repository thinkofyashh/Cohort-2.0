import { set } from "mongoose"
import { useState } from "react"


function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <Count count={count} setCount={setCount}></Count><br></br>
    </div>
  )
}

function Count({count,setCount}){
  return (<>
  <CountRender count={count}></CountRender>
   <Buttons count={count} setCount={setCount}></Buttons>
  </>)
}

function CountRender({count}){
  return(
    <>
    {count}
    </>
  )
}

function Buttons({count,setCount}){
  return (
    <>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
    </>
  ) 
}

export default App
