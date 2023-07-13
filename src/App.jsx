import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppRouter from "./routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
