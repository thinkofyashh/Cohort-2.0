import { useEffect, useState } from 'react'
import axios from "axios"; 
import './App.css'
import { set } from 'zod';

function App() {

  const [count,setCount]=useState(1);


  return (
   <>
   <button onClick={()=>{setCount(1)}}>1</button>
   <button onClick={()=>{setCount(2)}}>2</button>
   <button onClick={()=>{setCount(3)}}>3 </button>
   <button onClick={()=>{setCount(4)}}>4</button>
   <Todo id ={count}></Todo>
   </>
  )
}

function Todo({id}){
// use state 
  const [Todos,setTodos]=useState({});
// use effect
  useEffect(()=>{
    async function fetchData(){
    try{
        const res =await axios.get("https://sum-server.100xdevs.com/todo?id="+ id)
        setTodos(res.data.todo)

    }catch(err){
      console.log("error")
    }
    }
    // aysnc-await function 
    fetchData();
  },[id])


  return <div>
    <h1> {Todos.title}  </h1>
    {Todos.description}
  </div>
}

export default App
