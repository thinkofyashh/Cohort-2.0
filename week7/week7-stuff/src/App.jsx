import { set } from "mongoose"
import { createContext, useContext, useState } from "react"
import { CountContext } from "./context"


function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}></Count><br></br>
      </CountContext.Provider>
      
    </div>
  )
}
function Count({setCount}){
  return (<>
  <CountRender ></CountRender>
   <Buttons setCount={setCount}></Buttons>
  </>)
}
function CountRender(){
  const count=useContext(CountContext)
  return(
    <>
    {count}
    </>
  )
}
function Buttons({setCount}){
  const count=useContext(CountContext)
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
