import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isfilled, setIsfilled] = useState(false)
  useEffect(() => {
    if (count < 100 && isfilled) {
      setTimeout(() => setCount(count+1), 170)
    }

  }, [count, isfilled])
  window.onload=()=>{
    setIsfilled(true);

  }

  return (
    <>
        <h1 className='text-2xl font-semibold border-none text-center'>ProgressBar</h1>
        <br />
      <div className=' h-[35px] w-[450px] m-auto border-2 rounded-3xl text-center item-center'>
     
        <div style={{ height: "100%", width: `${count}%`, backgroundColor:"yellow", borderRadius: "30px" ,textAlign: "center",transition: "width 0.5s" }}>

          <span className='text-xl text-center items-center '>{count}%</span>
        </div>
        <br />
        {/* <button className='bg-blue-400 p-2' onClick={() => setIsfilled(!isfilled)}>Run</button> */}
        
        <p>{count>0 && count<100?"Loading...":"Done"}</p>


      </div>

    </>
  )
}

export default App
