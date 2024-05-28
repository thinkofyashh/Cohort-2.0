import { useState } from "react"

function App() {
const [title,setTitle]=useState("Hello my name is Yash")

console.log("Re - rendered")

function onClickHandler(){
  setTitle("Hello my name is "+Math.random())
}
  return (
    <>
    <button onClick={onClickHandler}>Some Thing Will Happen</button>
    <Header title="Hello my nmae is Raman"></Header>
    <Header title="Hello my name is mini"></Header>
    <Header title="hello my name is suchata"></Header>
    <Header title="Hello my name is RamanBahlala"></Header>
    <Header title="hello my name is chandu"></Header>
    <Header title={title}></Header>
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
