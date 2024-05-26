import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function onClickHandler(){
    setCount(count++);
  }

  return (
    <>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count} setCount={setCount}></CustomButton>

      

    </>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return <button onClick={onClickHandler} >Counter {props.count}</button>
}

export default App
