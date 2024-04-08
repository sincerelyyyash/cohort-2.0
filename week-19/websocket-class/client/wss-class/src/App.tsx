import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const  [latestMessage, setLatestMessage] = useState("");
  const [input, setInput] = useState("");

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8000')
    socket.onopen = () =>{
      console.log('Connected')
    }
    setSocket(socket)

    socket.onmessage = (message) =>{
      console.log("recieved message:" ,message.data);
      setLatestMessage(message.data)
    }
    return ()=>{
      socket.close()
    }

  },[])

  if(!socket){
    return <div>
      Connecting to Socket server...
    </div>
  }

  return (
    
    <>
    <input type="text" onChange={(e)=>{
      setInput(e.target.value);
    }}/>
    <button onClick={()=>{
      socket.send(input);
    }}>Send</button>
    {latestMessage}
    </>
  )
}

export default App
