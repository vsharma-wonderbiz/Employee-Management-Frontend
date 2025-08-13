import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EmployeeManagementApp from './Components/EmployeeManagementApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <EmployeeManagementApp/>
    </>
  )
}

export default App
