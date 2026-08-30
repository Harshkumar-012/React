import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(0)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState("")

  const passwordGenerator=useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*?+-_[]{}()"
    }

    for(let i=1;i<=Array.length;i++){
      let char =(Math.random()*str.length+1);
    }

  },[length,numberAllowed,charAllowed,setPassword])
  /*[length,numberAllowed,charAllowed,setPassword]   dependency array*/

  }

  return (
    <>
    <h1 className="text-6xl text-center text-white">Password Generator</h1>

    </>
  )


export default App
