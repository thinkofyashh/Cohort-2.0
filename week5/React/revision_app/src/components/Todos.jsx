import { useState } from "react"

export function Todo({todos}){   
return (
    <>
    {todos.map((todo)=>{
        return (<div>
            <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <h3>{todo.completed==true?"Completed":"MarkAsDone"}</h3>
        </div>)
        })}

    </>
)


}