import './App.css'
import { Card } from './components/BusinessCard'

function App() {

  return (
    <>
      <Card name="Yash" description="A Student in 100xDevs" interests={["ioninc","web dev","app dev"]} linkedIn="https://www.youtube.com/" twitter="https://github.com/thinkofyashh"> </Card> 
     
    </>
  )
}

export default App
