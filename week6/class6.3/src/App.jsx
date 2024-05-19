import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [exchangeData,setExchangeData] = useState({});
  const [bankdata,setBankData]=useState({})

  console.log("re - rendered")

  useEffect(function(){
    setTimeout(()=>{
      setBankData({income:100})
    },3000)
  },[])

  useEffect(function(){
    setTimeout(()=>{
      setExchangeData({returns:100})
    },1000);
  },[])

  

  const incomeTax=(bankdata.income+exchangeData.returns)*0.3
  return (
    <>
    hi there , your income tax returns are {incomeTax}
    </>
  )
}
export default App
