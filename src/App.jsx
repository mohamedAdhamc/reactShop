import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { Route, Routes } from "react-router-dom";
import Cart from './routes/Cart';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {

  return (
    <div className="home">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App
