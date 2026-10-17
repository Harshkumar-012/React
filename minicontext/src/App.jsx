import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import profile from './components/profile'

function App() {
  

  return (
    <UserContextProvider>
     <h1>React with chai</h1>
     <Login/>
     <profile/>
    </UserContextProvider>
  )
}

export default App
