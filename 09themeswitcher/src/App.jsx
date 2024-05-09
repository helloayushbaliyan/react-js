import { useState, useEffect } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

function App() {

  const [ThemeMode, setThemeMode] = useState("light")


  const LightTheme = () => {
    setThemeMode("light")
  }
  const DarkTheme = () => {
    setThemeMode("dark")
  }


  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(ThemeMode)
  }, [ThemeMode])


  return (
    <>
      <ThemeProvider value={{ ThemeMode, LightTheme, DarkTheme }}>
        <div>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
            </div>
          </div>

        </div>
      </ThemeProvider>
    </>
  )
}

export default App
