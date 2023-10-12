import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter]=useState(0)
//  let counter=15
 const addvalue=()=>{

  // console.log("clicked",counter)
  // // counter=counter+1;
  setCounter(counter+1)
  setCounter(prevCounter => prevCounter + 1)
 }
 const removeValue=()=>{

  if (counter > 0) {

  setCounter(counter-1)
  }
 }

  return (
    <>
     
        <h1>chai or ract</h1>
        <h2>counter value:{counter}
        </h2>
        <button on onClick={addvalue}>Add value{counter}</button>
        <br />
        <button onClick={removeValue}>remove value {counter}</button>
        
    </>
  )
}

export default App
