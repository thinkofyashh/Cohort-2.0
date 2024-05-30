import axios from "axios"
import { useEffect, useState } from "react"
function App() {
  const [Todos,setTodo]=useState([{id:1,title:"DSA",description:"From 4 to 5 pm"}])
  const [selectedId,setId]=useState(1);
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
this is custom 
<button onClick={()=>{
  console.log("id set to 1")
  setId(1)
}}>1</button>
<button onClick={()=>{
  console.log("id set to 2")
  setId(2)
}}>2</button>
<button onClick={()=>{
  console.log("id set to 3")
  setId(3)
}}>3</button>
<button onClick={()=>{
  console.log("id set to 4")
  setId(4)
}}>4</button>

<CustomTodo id={selectedId}></CustomTodo>

    

  
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

function CustomTodo({id}){
  console.log("Custom")
  const [count,setCount]=useState({});
  useEffect(()=>{
    async function fetching(){
      console.log("useEffect of custom gets called")
      const res=await axios.get("https://sum-server.100xdevs.com/todo?id="+id)
      setCount(res.data.todo)

    }
    fetching()
  },[id])
  return (
    <>
    <h1>{count.title}</h1>
    <h2>{count.description}</h2>

    </>
  )

}

export default App