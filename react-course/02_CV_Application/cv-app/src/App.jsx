import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CVForm from "./components/CVForm.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CVForm />
    </>
  )
}

export default App
