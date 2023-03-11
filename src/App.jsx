import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Recat Fragment
    <>
      <h1>Welcome to Poon App</h1>
      <MyButton />
    </>
  )
}

export default App
