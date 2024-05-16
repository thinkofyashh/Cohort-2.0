import { useEffect, useState } from 'react'
import axios from "axios"; 
import './App.css'
import { set } from 'zod';

function App() {

  let [count,setCount]=useState(1);
  let [Inputvalue,setInputvalue]=useState(0);
  let [finalvalue,setfinalvalue]=useState(0);


 

  useEffect(()=>{

    let counting =0;
  for(let i=0;i<=Inputvalue;i++){
    counting=counting+i;
    
  }
  setfinalvalue(counting)

  },[Inputvalue])


  return (
   <>
   <input placeholder='Enter the Number ' onChange={function(e){
    setInputvalue(e.target.value)
   }}></input><br></br>
   Sum of {Inputvalue} is {finalvalue}
  <br></br>
   <button onClick={()=>{setCount(count=count+1)}}>Counter ({count})</button>

  
   </>
  )
}
export default App
