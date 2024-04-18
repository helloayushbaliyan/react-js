import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(10)
  let addvalue = () => {
    setcounter(counter + 1)
  }
  let removevalue = () => {
    setcounter(counter - 1)
  }
  if (counter > 20) {
    counter = 20
  } else if (counter < 1) {
    counter = 0
  }


  return (
    <>
      <h1>counter projects</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addvalue}>add value  </button>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
