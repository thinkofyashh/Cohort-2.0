import axios from "axios"
import React, { useEffect, useMemo, useState,Fragment, useCallback, useRef } from "react"
function App() {
  const divRef=useRef()
  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML=10
      
      },5000)
  },[])


  const IncomeTax=3000
 return (
    <>  

    hi your income tax is <div ref={divRef}>{IncomeTax}</div>

    
    
    </>
  )
}




export default App