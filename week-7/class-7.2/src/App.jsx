import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { countAtom, evenSelector } from "./store/atoms/Count";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";


function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {

  return <div>
    <CountRenderer/>
    <Buttons />
    <EvenCount/>
  </div>
}

function EvenCount(){
  const isEven= useRecoilValue(evenSelector)
  return <div>
    {isEven? "it is even " : null}
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons({}) {
  const [count, setCount] = useRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count=> count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count=> count - 1)
    }}>Decrease</button>
  </div>
}

export default App
