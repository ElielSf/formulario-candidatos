import { useState } from 'react'
import Header from './components/Header.jsx'
import Formulario from './components/Formulario.jsx'
import './css/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header><Header /></header>
      <main><Formulario /></main>
    </div>
  )
}