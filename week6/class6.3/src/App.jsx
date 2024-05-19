import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
  
const divRef=useRef();

  useEffect(()=>{setTimeout(()=>{

   divRef.current.innerHTML=100

  },5000)},[])
  const incomeTax=2000
  return (
    <>
    hi your income tax is <div ref={divRef}>{incomeTax}</div>
    </>
  )
}
export default App
