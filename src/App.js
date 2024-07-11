import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './Home/HomaPage'
import Login from './Login/Login'
const App = () => {
  return (
   <>
<Router>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
</Router>
   </>
  )
}

export default App