import { useState } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Navbar />
   </Router>
  )
}

export default App
