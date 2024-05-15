function App() {

 return <div>
  <CardWrapper>
   
    <div>Hi there </div>
    
    <CardWrapper>
      <TextComponent></TextComponent>
      </CardWrapper>

  </CardWrapper> 
 </div>
}

function TextComponent(){
  return <div>
    hit here 
  </div>
}
function CardWrapper(props){
return <div style={{border:"2px solid black", padding:20, margin:20}}>
  {props.children}
  </div>
  
}


export default App
