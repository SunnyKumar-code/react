import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=useState(0)
 const addOne=()=>{
  if(counter<20){
    setCounter(counter+1)
  }

 }
 const minusOne=()=>{
 if(counter>0){
  setCounter(counter-1)
 }
 }


  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={addOne}>add 1</button><br /><br />
      <button onClick={minusOne}>minus 1</button>
    </>
  )
}

export default App
