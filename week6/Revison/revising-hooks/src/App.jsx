
function App() {
  return (
    <>
    <CardWrapper>

<Greet></Greet>

    </CardWrapper>

    <CardWrapper>

      Hello again 
    </CardWrapper>
    </>
  )
}
function Greet(){
  return <>
  hello there welcome 
  </>
}
function CardWrapper({children}){
  return (
    <div style={{border:"20px solid black", padding:20, margin:20}}>{children}</div>
  )
}

export default App
