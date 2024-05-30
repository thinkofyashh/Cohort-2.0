import axios from "axios"
import React, { useEffect, useMemo, useState,Fragment, useCallback } from "react"
function App() {

  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById("container").innerHTML=10
      },5000)
  },[])


  const IncomeTax=3000
 return (
    <>  

    hi your income tax is <div id="container">{IncomeTax}</div>

    
    
    </>
  )
}




export default App