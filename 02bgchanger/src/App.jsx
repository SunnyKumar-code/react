import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("black");

  return (
    <div className=' w-screen h-screen'
    style={{backgroundColor:color}}>
      <div className='fixed bottom-3 w-screen flex justify-center  h-11 '>
        <div className='w-11/12 bg-white rounded-lg flex justify-center align-middle'>
        <button className='bg-red-500 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("red")}>
          red
          </button>
          <button className='bg-green-500 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("green")}>
          Green
          </button>
          <button className='bg-yellow-800 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("olive")}>
          Olive
          </button>
          <button className='bg-gray-500 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("gray")}>
          Gray
          </button>
          <button className='bg-yellow-500 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("Yellow")}>
          Yellow
          </button>
          <button className='bg-sky-600 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("blue")}>
          Blue
          </button>
          <button className='bg-purple-950 px-1 m-1 rounded-xl text-white' onClick={()=>setColor("purple")}>
          Purple
          </button>
          </div>

      </div>

    </div>
  )
}

export default App
