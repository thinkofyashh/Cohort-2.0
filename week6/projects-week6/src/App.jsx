import React, { useState } from "react"
import {useMemo} from "react";
let counter =4;
function App() {
  const [todos,setTodos]=useState([{
    id:1,
    title:"go to gym",
    description:"from 6-9 pm"
  },
  {
    id:2,
    title:"DSA",
    description:"from 9-12 pm"
  },
  {
    id:3,
    title:"Dev",
    description:"from 2-5 pm"
  }])
  function updateTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }
  return (
   <div>
    <button onClick={updateTodo}>Add Todo</button>

   {todos.map(function(todo){
    return <Todo title={todo.title} description={todo.description}></Todo>
   })}
   </div>
  )
}
function Todo(props){
  return <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>
}


export default App
