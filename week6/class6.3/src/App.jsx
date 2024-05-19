import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {

  useEffect(()=>{setTimeout(()=>{

    document.getElementById("incomeTaxContainer").innerHTML=10


  },5000)},[])
  const incomeTax=2000
  return (
    <>
    hi your income tax is <div id="incomeTaxContainer">{incomeTax}</div>
    </>
  )
}

export default App
