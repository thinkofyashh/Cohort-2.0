import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [exchange1Data,setExchange1Data] = useState({});
  const [exchange2Data,setExchange2Data] = useState({});
  const [bankdata,setBankData]=useState({})

  console.log("re - rendered")

  useEffect(function(){
    setTimeout(()=>{
      setBankData({income:100})
    },3000)
  },[])

  useEffect(function(){
    setTimeout(()=>{
      setExchange1Data({returns:100})
    },1000);
  },[])

  useEffect(function(){
    setTimeout(()=>{
      setExchange2Data({returns:100})
    },1000);
  },[])


  const exhangereturns = useMemo(()=>{
    return exchange1Data.returns+exchange2Data.returns;
  },[exchange1Data,exchange2Data])
  const incomeTax=(bankdata.income+exhangereturns)*0.3
  return (
    <>
    hi there , your income tax returns are {incomeTax}
    </>
  )
}
export default App
