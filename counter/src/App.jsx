import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //hooks

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    if(count>0){
      setCount(count - 1)
    }
    
  }

  const clearAll = () =>{
    setCount(0)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={clearAll}>Clear All</button>
    </>
  )
}

export default App
