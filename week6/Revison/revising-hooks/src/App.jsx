import axios from "axios"
import React, { useEffect, useMemo, useState,Fragment, useCallback } from "react"
function App() {

  const [count,setCount]=useState(0);

function onClickHandler(){
  setCount(count+1)
}
// primitive dataype
var a=1;
// non primitive datatype
var b= useCallback(()=>{
  function b(){
    console.log("hello there")
  }
},[])
  return (
    <>  
    <button onClick={onClickHandler}>counter {count}</button> <br></br>
    <Demo a={a}></Demo><br></br>
    <Demo1 b={b}></Demo1>
    
    </>
  )
}
// is being getting called again again beacuse of non primitive datatype as react thinking something has chanaegd . beacuse everytime the react re renders it create new instance so it changes refrences
const Demo1=React.memo(function Demo1(){
  console.log("memo1 got called")
  return (
    <>
    hi 
    
    </>
  )
})
// its a primitive data types react compres its with value .
const Demo=React.memo(function Demo(){
  console.log("memo got called")
  return (
    <>
    hi three
    
    </>
  )
})


export default App