import { useState } from 'react'
import './App.css'
import Display from './pages/Display'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Display/>}/>
      </Routes>
    </>
  )
}

export default App
