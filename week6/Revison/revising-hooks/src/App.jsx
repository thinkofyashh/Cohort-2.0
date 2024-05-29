import axios from "axios"
import { useEffect, useState } from "react"
function App() {
  console.log("Main rendered")
  return (
    <> 

    <Todo id={3}></Todo>
    <Todo id={5}></Todo>
    </>
  )

}

function Todo({id}){
const [Todos,setTodo]=useState({});
  useEffect(()=>{
    async function fetchData(){
      console.log("inside UseEffect")

      const res= await axios.get("https://sum-server.100xdevs.com/todo?id="+id)
      setTodo(res.data.todo);



    }
    fetchData()
  },[id])

  return (<>
  <h1>{Todos.title}</h1>
  <h2>{Todos.description}</h2>
  </>)


}




export default App