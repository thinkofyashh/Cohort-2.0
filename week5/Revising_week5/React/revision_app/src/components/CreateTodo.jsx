import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    function onClickHandler(){
        alert("toDo added ")
    }


    return (
        <>

        <input style={{padding:20, margin:20}} type="text" placeholder="Title" onChange={function(event){
            const value=event.target.value
            setTitle(value)
        }}></input> <br></br>
        <input style={{padding:20, margin:20}} type="text" placeholder="Description" onChange={function(event){
            const value=event.target.value
            setDescription(value)
        }}></input> <br></br>

        <button onClick={onClickHandler}>Add Todo</button>
        
        
        </>
    )
}