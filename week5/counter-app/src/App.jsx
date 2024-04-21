import React, { useState } from "react";

function App() {
  // Initializing the state using useState
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Gym from 7-9",
      completed: false
    },
    {
      title: "Do DSA",
      description: "Do DSA from 8-10",
      completed: true
    }
  ]);
  function onClickHandler(){
    setTodos([...todos,{
      title:"another title",
      description:"another description"
    }])
  }

  return (
    <div>
      <button onClick={onClickHandler}>Random ToDo adder</button>

      <Todo title="Gym" description="at 2-3 am"></Todo>

      <Todo title={todos[0].title} description={todos[0].description}></Todo>
      
      {todos.map(function(t){
       return  <Todo title={t.title} description={t.description}></Todo>
      })}
      
    </div>
  );
}
// todos:
//title
//description
// define a component 
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>

}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;


