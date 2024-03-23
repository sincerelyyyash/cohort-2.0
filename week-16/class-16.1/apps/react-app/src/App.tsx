import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button } from '@repo/ui/button';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Button appName='ReactApp' >Hello from react </Button>
   </div>
  )
}

export default App
