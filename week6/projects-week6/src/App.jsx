import { useState } from "react"
function App() {
  const [count,setCount]=useState("my name is Yash");
function updateTitle(){
  setCount("my name is " + Math.random())
}
  return (
   <div>
      <button onClick={updateTitle}>Click me to Change the Title</button>
     <Header title={count}></Header>
      <Header title="my name is raman"></Header>
   </div>
  )
}
function Header(props){
  return <div>
    {props.title}
  </div>

}
export default App
