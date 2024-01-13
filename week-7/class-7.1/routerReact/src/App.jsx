import { lazy, Suspense } from 'react'
const Dashboard = lazy(() => import("./components/Dashboard")) 
const Landing = lazy(()=> import("./components/Landing")) 

import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'



function App() {


  return (
  <div>
    
     <BrowserRouter>
     <Appbar/>
    <Routes>
      <Route path='/dashboard' element={<Suspense fallback={"Loading.."}><Dashboard/></Suspense>} />
      <Route path='/' element={<Suspense fallback={"Loading.."}><Landing/></Suspense>} />
    </Routes>
   </BrowserRouter>
  </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
return  <div style={{background: "black"}}>
   
      <div>

        <button onClick={()=>{
          navigate("/")
        }}>Landing</button>

        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
    </div>
}

export default App
