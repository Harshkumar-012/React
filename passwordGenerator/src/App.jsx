import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*?+-_[]{}()"
    }

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const getStrength = () => {
    let score = 0
    if (length >= 8) score++
    if (length >= 14) score++
    if (numberAllowed) score++
    if (charAllowed) score++
    return Math.min(score, 3)
  }

  const strengthLabels = ["Weak", "Fair", "Good", "Strong"]
  const strengthColors = ["bg-red-500", "bg-yellow-500", "bg-green-500", "bg-green-700"]
  const strength = getStrength()

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0D1117]">
      <div className="w-full max-w-md mx-4 shadow-md rounded-lg px-6 py-10 bg-gray-800 text-white">

        <h1 className="text-center mb-8 text-2xl font-medium">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-white text-gray-900 font-mono tracking-wide text-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-6 py-0.5 shrink-0 transition-colors'
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 h-2 rounded bg-gray-600 overflow-hidden">
            <div
              className={`h-full transition-all ${strengthColors[strength]}`}
              style={{ width: `${(strength + 1) * 25}%` }}
            />
          </div>
          <span className="text-xs text-gray-300 min-w-40px text-right">
            {strengthLabels[strength]}
          </span>
        </div>

        <div className='flex flex-col gap-6 text-sm mb-8'>

          <div className='flex items-center justify-between gap-x-2'>
            <label htmlFor="lengthInput" className="text-gray-300 shrink-0">
              Length: {length}
            </label>
            <input
              type="range"
              id="lengthInput"
              min={6}
              max={32}
              value={length}
              className='cursor-pointer flex-1'
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Include numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Include symbols</label>
          </div>

        </div>

        <button
          onClick={passwordGenerator}
          className="w-full mt-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded transition-colors text-base"
        >
          Generate new password
        </button>

      </div>
      <div className="text-center text-gray-500 text-lg mt-8">
        Made with ❤️ by Harsh Kumar
      </div>
    </div>
  )
}

export default App