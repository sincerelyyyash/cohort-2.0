import { useState } from 'react'
import { Header } from './components/header'
import Todo from './components/todo'
import { CardWrapper } from './components/CardWrapper'


let counter = 4
function App() {

const [todo, setTodo] = useState([
  {
    title: "Gym",
    description: "Now go",
    id: 1
  },
  {
    title: "Study",
    description: "Now go",
    id: 2
  },
  {
    title: "Code",
    description: "Now go",
    id: 3
  }
])

function addTodo(){
  setTodo([...todo, {
    title: 'new todo',
    description: 'Now go now',
    id: counter++
  }])
}

function TextComponent(){
  return <div>
    Hi there
  </div>
}

  return (
   <>
   <CardWrapper 
   InnerComponent={TextComponent} />
   {/* <div>
    <button onClick={addTodo}>Add Todo</button>
    {todo.map(todo=>(
      <Todo title={todo.title}
      description={todo.description} 
      key={todo.id}
      />
    ))} */}

    {/* <HeaderWithButton/>
   <Header title="Yash"/> */}
   {/* </div> */}
   </>
  )
}



function HeaderWithButton() {
  const [name, setName] = useState("Yash Thakur") 
  function updateName(){
    setName("my name is " + Math.random());
  }

  return <>
  <button onClick={updateName}>Update the Name</button>
  <Header title={name}/>
  </>
}

export default App
