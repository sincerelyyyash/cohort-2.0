import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Count  count ={count}/>
  
  </>
  )
}

function Count(count){
  return <div>
    {count}
    <Buttons count ={count} setCount={setCount}/>
  </div>
}

function Buttons(count, setCount){
  return <div>
    <button
    onClick={()=> {setCount(count+1)}}
    >Increase</button>

    <button
    onClick={()=> {setCount(count-1)}}
    >Decrease</button>
      </div>
}

export default App
