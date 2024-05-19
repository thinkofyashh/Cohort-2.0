import { useEffect, useMemo, useState } from 'react'
import { memo } from 'react';

import axios from "axios"; 
import './App.css'
import { set } from 'zod';

function App() {

  let [count,setCount]=useState(1);
  let [Inputvalue,setInputvalue]=useState(0);


var a=1;
  
  
  const counted =useMemo(()=>{
    console.log("memo is being called")
    let counting =0;
  for(let i=0;i<=Inputvalue;i++){
    counting=counting+i;
    
  }
  return counting;
  },[Inputvalue])


  return (
   <>
   <input placeholder='Enter the Number ' onChange={function(e){
    setInputvalue(e.target.value)
   }}></input><br></br>
   Sum of {Inputvalue} is {counted}
  <br></br>
   <button onClick={()=>{setCount(count=count+1)}}>Counter ({count})</button>
   <Demo a={a}></Demo>

  
   </>
  )
}

const Demo=memo(function({a}){
  console.log("re rendered demo");
  return <div>
    hello there {a}
  </div>
})
export default App