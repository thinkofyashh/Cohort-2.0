import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [exchange1Data,setExchange1Data] = useState({});
  const [exchange2Data,setExchange2Data] = useState({});
  const [bankdata,setBankData]=useState({})
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

  const calculateReturns=useCallback(function(){
    return exchange1Data.returns+exchange2Data.returns;
  },[exchange1Data,exchange2Data])
  const incomeTax=(bankdata.income+calculateReturns())*0.3
  return (
    <>
    <CrpytoReturns calculateReturns={calculateReturns}></CrpytoReturns>
    </>
  )
}
const CrpytoReturns=memo(function({calculateReturns}){
  console.log("Crypto Re- rendered  ")
  return <div>
    Hi there your Cryto Returns are {calculateReturns()}
  </div>
})
export default App
