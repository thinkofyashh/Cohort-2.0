import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, isEven } from "./store/atom/count";
import { useMemo } from "react";

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
   <CustomDiv></CustomDiv>
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
  const setCount=useSetRecoilState(countAtom)
  console.log("re rendered button component again ")
  return (
    <>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
    </>
  ) 
}

function CustomDiv(){
  const ans=useRecoilValue(isEven)
  return(
    <>
    {ans ?<div>It is Even</div>:<div>It is odd</div>}
    </>
  )
}

export default App
