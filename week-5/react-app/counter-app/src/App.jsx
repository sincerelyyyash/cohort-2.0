import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "GO to gym",
    description: "GO to gym from 7-9",
    completed: false
  },{
    title: "Learn DSA",
    description: "LEarn dsa from youtube",
    completed: false
  }
])

  return (
    <>
    <div>
      {JSON.stringify(todos)}
    </div>
    </>
  )
}

function Todo(props){
  return <div>
    <h1>{props.tite}</h1>
    
  </div>
}

export default App
