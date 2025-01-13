import './App.css'

function App() {
  return (
    <>
    <Todo title='Going to the Gym' description='chest and triceps' done={false}></Todo>
    </>
    
  )
}
interface UserInterface{
  title:string,
  description:string,
  done:boolean
}

function Todo(props:UserInterface){
  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <h3>{props.done}</h3>
    
    </>
  )

}
export default App
