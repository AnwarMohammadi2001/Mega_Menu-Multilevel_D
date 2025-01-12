import { useState } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
   <div className=''>
   <Navbar />
   <Home />
   </div>
   </Router>
  )
}

export default App
