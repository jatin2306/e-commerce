import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login/Login'
import Layout from './Layout/Layout'
import Register from './Login/Register'


const RouteConfig = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Layout Component={HomePage} />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
  )
}

export default RouteConfig