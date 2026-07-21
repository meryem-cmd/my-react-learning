import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

// state ko change krne k lie responsible 
  let [counter, setCounter] = useState(15)
  // let counter = 10  -> this variable will never be shown in ui only in console it can be updated

  const addValue = () => {
    
    // counter = counter + 1
    console.log("value added", Math.random())
    setCounter(counter + 1)
    // yeh woh value leta h k naye wale counter m ab kia value dalni h
  }


  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>React</h1>
    <h2>Counter Value: {counter} </h2>
    <button 
    onClick={addValue}>Add Value</button>
    <br></br>
    <button  onClick={
      removeValue
    }>Remove value</button>      
    </>
  )
}

export default App
