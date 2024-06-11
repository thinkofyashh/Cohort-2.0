import { set } from "mongoose"
import { createContext, useContext, useState } from "react"
import { CountContext } from "./context"


function App() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
      <Count></Count><br></br>
      </CountContext.Provider>
      
    </div>
  )
}
function Count(){
  console.log("Count is Re - rendered even tho it not uses COunt or setCount")
  return (<>
  <CountRender ></CountRender>
   <Buttons></Buttons>
  </>)
}
function CountRender(){
  const {count}=useContext(CountContext)
  return(
    <>
    {count}
    </>
  )
}
function Buttons(){
  const {count,setCount}=useContext(CountContext)
  
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
