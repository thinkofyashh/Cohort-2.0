import axios from "axios"
import { useEffect, useState } from "react"
function App() {
  const [Todos,setTodo]=useState([{id:1,title:"DSA",description:"From 4 to 5 pm"}])
  console.log("App re - rendered")

  useEffect(()=>{
    async function fetchData(){
      console.log("useEffect called")
      const res=await axios("https://sum-server.100xdevs.com/todos")
      setTodo(res.data.todos)
    }

    fetchData()
  },[])

  return (
    <>

{Todos.map((todo)=>{
  return <Todo title={todo.title} description={todo.description} id={todo.id} key={todo.id}></Todo>
})}


    

  
    </>
  )
}

function Todo({title,description,id}){

  return (
    <>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <h3>{id}</h3>

    
    </>
  )

}

export default App