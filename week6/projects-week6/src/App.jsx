import { useState } from "react"
function App() {
  return (
   <div>
       <HeaderWithButton></HeaderWithButton>
      <Header title="my name is raman1"></Header>
      <Header title="my name is raman2"></Header>
      <Header title="my name is raman22"></Header>
      <Header title="my name is raman31"></Header>
   </div>
  )
}
function HeaderWithButton(props){
  const [title,setTitle]=useState("my name is yash")

  function onClicked(){
    setTitle("My name is "+ Math.random());
  }
  return <>
  <button onClick={onClicked}>Click the Button</button>
  <Header title={title}></Header>
  
  </>

}
function Header(props){
  return <div>
    {props.title}
  </div>

}
export default App
