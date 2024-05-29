import { useState } from "react"
import React,{Fragment} from "react"
function App() {

const [Todos,setTodos]=useState([
    {
    id:1,
    title:"Gym",
    description:"from 6to 8 pm"
  },{
    id:2,
    title:"DAS",
    description:"from 6to 8 pm"
  },{
    id:3,
    title:"Ai",
    description:"from 6to 8 pm"
  }
])
function onClickHandler(){
  setTodos([...Todos,{
    id:Math.random(),
    title:Math.random(),
    description:Math.random()
  }])

    
}
  return (
    <>
    {Todos.map((todo)=>{
      return <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} ></Todo>
    })}
    <button onClick={onClickHandler}>Add Todo</button>
    </>
  )
}
const Todo=React.memo(function Todo({title,description,id}){
  console.log("Todo Re rendered")
  return <>
  <h1>{id}</h1>
  <h1>{title}</h1>
  <h2>{description}</h2>
  
  
  </>
})
export default App
