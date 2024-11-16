import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let counter=15
const addvalue= () => {
  counter++;    
}

const subtractvalue= () => {
  counter++;    
}

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value:{counter} </h2>

      
      <button onClick={addvalue}>Add value</button>
      <button onClick={subtractvalue}>subtract value</button>
      
    </>
  )
}

export default App
