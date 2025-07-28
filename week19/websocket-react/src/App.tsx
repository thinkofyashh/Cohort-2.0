import { useEffect, useState } from 'react'



function App() {
  const [Socket,setSocket]=useState<null | WebSocket>(null)
  const [message,setLatestMessage]=useState("")


  useEffect(()=>{
    const Socket = new WebSocket('ws://localhost:8080')

    Socket.onopen=()=>{
      console.log('Connected to the server')
      setSocket(Socket)
    }

    Socket.onmessage=(message)=>{
      console.log('Received message from server')
      setLatestMessage(message.data)
    }

    return ()=>{
      Socket.close()
    }
  },[])

  if(!Socket) return  <div>loading </div>



  

  return (
    <>


<input></input>
<button onClick={()=>{
 Socket.send("hello worlsd ")
}}>Send </button>
{message}

      
    </>
  )
}

export default App
