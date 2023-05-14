import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'

function App() {

  return (
    <div className="home">
      <Navbar />
      <Product icon={""} title={"title"} price={"test price"} />
    </div>
  )
}

export default App
