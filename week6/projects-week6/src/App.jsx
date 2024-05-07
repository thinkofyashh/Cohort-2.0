import React, { useState } from "react"
import {useMemo} from "react";
function App() {
 const [count,setCount]=useState("my name is Yash");
function updateTitle(){
  setCount("my name is " + Math.random())
}
  return (
   <div>
      <button onClick={updateTitle}>Click me to Change the Title</button>
     <Header title={count}></Header>
      <Header title="my name is raman2"></Header>
      <Header title="my name is raman32"></Header>
      <Header title="my name is ramane"></Header>
      <Header title="my name is ramanrsrf"></Header>
      <Header title="my name is ramanrs"></Header>

   </div>
  )
}
const Header=React.memo(function Header(props){
  return <div>
    {props.title}
  </div>

})
export default App
