import { useEffect, useMemo, useState } from 'react'
import { memo } from 'react';

import axios from "axios"; 
import './App.css'
import { set } from 'zod';
function App() {
let [count,setCount]=useState(1);
// changed to function 
function a(){
  console.log("hi there")
}
  return (
   <>
   <button onClick={()=>{setCount(count=count+1)}}>Counter ({count})</button>
   <Demo a={a}></Demo>  
   </>
  )
}
// memo will only run this function when somthing is changed in a . 
const Demo=memo(function({a}){
  console.log("re rendered demo");  // we put a log to check this 
  return <div>
    hello there {a}
  </div>
})
export default App
