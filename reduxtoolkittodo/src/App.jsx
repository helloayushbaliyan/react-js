import { useState } from 'react'

import './App.css'
import Addtodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="grid w-full h-screen place-content-center bg-slate-800 place">
      <div className="">
      <h1>learn about redux</h1>
      <Addtodo />
      <Todo />
      </div>
      </div>
    </>
  )
}

export default App
