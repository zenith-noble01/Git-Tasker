import React from 'react'
import "./App.css"
import {Routes, Route} from "react-router-dom"
import Register from './pages/register/Register'
import Login from './pages/Login/Login'
// import Navbar from './components/nav/Navbar'
import Content from './components/content/Content'

const App = () => {
  return (
    <div className="app">
      {/* <Sidebar /> */}
      <Routes>
        <Route index element={<Content />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
