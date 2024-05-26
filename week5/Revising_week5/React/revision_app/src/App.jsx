import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todos'

function App() { 
  const [todos,setTodos]=useState([])
  fetch("https://sum-server.100xdevs.com/todos").then(
        async function (data){
            const res =await data.json();
            setTodos(res.todos)
        }
    )
 return (
    <>
    <CreateTodo></CreateTodo>
    <Todo todos={todos} ></Todo>
    </>
  )
}
export default App
