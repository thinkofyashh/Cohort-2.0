import { useEffect, useState } from 'react'
import axios from "axios"; 
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(
    ()=>{
     async  function fetchdata(){
      try{
        const res= await axios.get("https://sum-server.100xdevs.com/todos")
        setTodos(res.data.todos)
      }catch(err){
        console.log(err)

      }
      }
      fetchdata();
    }
    ,[])
  return (
   <>
   {
    todos.map((todo)=>{
     return  <Todo title={todo.title} description={todo.description}></Todo>;
    })
   }
   </>
  )
}

function Todo({title,description}){
  return <div>
    <h1> {title}  </h1>
    {description}
  </div>
}

export default App
