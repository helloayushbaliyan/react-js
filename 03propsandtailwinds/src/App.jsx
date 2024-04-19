import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 mb-8 text-black'>Tailwinds Test</h1>
      <div className="flex gap-4">
      <Card username="ayush baliayn" btntext="click me" />
      <Card username='abhay'  />
      </div>

    </>
  )
}

export default App
