import React,{ Fragment } from "react"
import { useState } from "react"

function App() {

console.log("Re - rendered")
const [title,setTitle]=useState("Hello my name is Yash")

function onClickHandler(){
  setTitle("Hello my name is "+Math.random())
}


  return (
    <>
    <Header title="Hello my nmae is Raman"></Header>
    <Header title="Hello my name is mini"></Header>
    <Header title="hello my name is suchata"></Header>
    <Header title="Hello my name is RamanBahlala"></Header>
    <Header title="hello my name is chandu"></Header>
    <Header title={title}></Header>
    <button onClick={onClickHandler}>Some thing is about to get changed</button>
  
    </>
  )
}

const Header=React.memo(
  function Header({title}){
    console.log("Header Re -rendered")
    return  <div>{title}</div>
  }


)


export default App
