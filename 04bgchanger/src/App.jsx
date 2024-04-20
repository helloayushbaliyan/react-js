import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen grid duration-500 " style={{ backgroundColor: color }}>
      <div className="flex justify-center">
        <div className="fixed bottom-10  flex flex-wrap p-2 text-xl gap-4 bg-white rounded-3xl">
          <button onClick={() => setcolor("red")} className="  py-1 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "red" }}>red</button>
          <button onClick={() => setcolor("green")} className="  py-2 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "green" }}>green</button>
          <button onClick={() => setcolor("blue")} className="  py-2 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "blue" }}>blue</button>
          <button onClick={() => setcolor("olive")} className="  py-2 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "olive" }}>olive</button>
          <button onClick={() => setcolor("lavender")} className="  py-2 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "lavender" }}>lavender</button>
          <button onClick={() => setcolor("purple")} className="  py-1 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "purple" }}>purple</button>
          <button onClick={() => setcolor("yellow")} className="  py-1 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "yellow" }}>yellow</button>
          <button onClick={() => setcolor("lime")} className="  py-1 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "lime" }}>lime</button>
          <button onClick={() => setcolor("black")} className="  py-1 w-28 capitalize text-center rounded-3xl text-white" style={{ backgroundColor: "black" }}>black</button>
          <button onClick={() => setcolor("brown")} className="  py-1 w-28 capitalize text-center rounded-3xl" style={{ backgroundColor: "brown" }}>brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
