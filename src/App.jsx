import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import AllServices from './Pages/AllServices'

function App() {
  

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/services' element={<AllServices/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
