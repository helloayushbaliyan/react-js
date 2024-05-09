import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts'
import { useEffect } from 'react'

function App() {
  const [Todos, setTodos] = useState([])

  const AddTodo = (Todo) => {
    setTodos((prev) => [{ id: Date.now(), ...Todo }, ...prev,])
  }

  const UpdateTodo = (id, Todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? Todo : prevTodo)))
  }

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((Todo) => Todo.id !== id))
  }

  const ToggleComplete = (id) => {
    setTodos((prev) => prev.map((toggleTodo) => toggleTodo.id === id ? { ...toggleTodo, completed: !toggleTodo.completed } : toggleTodo))
  }

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"))

    if (Todos && Todos.length > 0) {
      setTodos(Todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  }, [Todos])
  return (
    <TodoProvider value={{ AddTodo, DeleteTodo, ToggleComplete, UpdateTodo, Todos }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* <TodoItem /> */}
            {Todos.map((Todo) => (
              <div key={Todo.id}
                className=' w-full'>
                <TodoItem Todo={Todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
