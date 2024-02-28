import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jumbotron from './components/jumbotron'
import About from './components/about'
import Portfolio from './components/portfolio'

function App() {
  const [count, setCount] = useState(0)
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 3000,
    delay: 100,
    reset: true
  })
  return (
    <>
      <Jumbotron sr={sr} />
      <About sr={sr} />
      <Portfolio sr={sr} />
    </>
  )
}

export default App
