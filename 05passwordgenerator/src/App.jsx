import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  let [length, setlenght] = useState("8")
  let [numbers, setnumbers] = useState(false)
  let [character, setcharacter] = useState(false)
  let [password, setpassword] = useState("")

  let passwordref = useRef(null)

  let copypasswordtoclipboard = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  let passswordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (character) str += "~!@#$%^&*()_=-\[];<>?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length, numbers, character, setpassword])

  useEffect(() => {
    passswordgenerator()
  }, [length, numbers, character, passswordgenerator])


  return (
    <div className="w-full h-screen  bg-black text-xl capitalize">
      <div className="flex justify-center text-white  pt-20">
        <div className="bg-slate-800 w-[50rem] space-y-7 p-4 rounded-3xl">
          <h1 className='text-center text-3xl'>password generator</h1>
          <div className="flex rounded-2xl overflow-hidden">
            <input ref={passwordref} value={password} className='w-full h-12 text-orange-500 outline-none text-2xl pl-4 ' readOnly type="text" />
            <button onClick={copypasswordtoclipboard} className='h-12 bg-blue-400 hover:bg-orange-500 duration-500 focus:bg-blue-500  w-[5rem] text-xl'>copy</button>
          </div>
          <div className="flex space-x-8 mt-5">
            <div className="space-x-3 text-orange-500">
              <input onChange={(e) => {
                setlenght(e.target.value)
              }} x
                id='length' type="range" min={8} max={20} value={length} />
              <label htmlFor="length">length:{length}</label>
            </div>
            <div className="space-x-3 text-orange-500">
              <input
                onChange={() => {
                  setnumbers((prev) => !prev)
                }}
                id='number' defaultChecked={numbers} type="checkbox" className='scale-150' />
              <label htmlFor="number">number</label>
            </div><div className="space-x-3 text-orange-500">
              <input
                onChange={() => {
                  setcharacter((prev) => !prev)
                }}
                id='special' defaultChecked={character} type="checkbox" className='scale-150' />
              <label >special characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
