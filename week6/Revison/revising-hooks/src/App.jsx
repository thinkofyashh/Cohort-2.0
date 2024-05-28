import { useState } from "react"

function App() {

console.log("Re - rendered")


  return (
    <>
    <Header title="Hello my nmae is Raman"></Header>
    <Header title="Hello my name is mini"></Header>
    <Header title="hello my name is suchata"></Header>
    <Header title="Hello my name is RamanBahlala"></Header>
    <Header title="hello my name is chandu"></Header>
    <HeaderWithButton></HeaderWithButton>
    </>
  )
}

function HeaderWithButton(){
  console.log("Component Only re Rendered")
const [title,setTitle]=useState("Hello my name is Yash")

function onClickHandler(){
  setTitle("Hello my name is "+Math.random())
}


  return (
    <>

    <div>{title}</div>
    <button onClick={onClickHandler}>Some thing is about to change</button>

    
    </>
  )
}

function Header({title}){
  return (
    <>
    <div>{title}</div>
    </>
  )

}

export default App
