import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./store/atom/count";

function App() {
  return (
    <div>
      <RecoilRoot>
      <Count></Count><br></br> 
      </RecoilRoot>    
    </div>
  )
}
function Count(){
  console.log("Count is Re - rendered even tho it not uses COunt or setCount")
  return (<>
  <CountRender ></CountRender>
   <Buttons></Buttons>
  </>)
}
function CountRender(){
  const count=useRecoilValue(countAtom);
  return(
    <>
    {count}
    </>
  )
}
function Buttons(){
  const [count,setCount]=useRecoilState(countAtom)
  
  return (
    <>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
    </>
  ) 
}

export default App
