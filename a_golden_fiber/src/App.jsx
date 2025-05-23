import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs';
import Sustainability from './components/Sustainability';
import Testimonials from './components/Testimonials';
import Product from './components/Product';
function App() {

  return (
    <>
    <Router>
      
      <Routes>
        <Route path="/" Component={Header} />
        <Route path="/about" Component={AboutUs} />
        <Route path="/product" Component={Product} />
        <Route path='/sustainability' Component={Sustainability} />
        <Route path="/testimonials" Component={Testimonials} />
        <Route path = "/contact" Component = {Contact} />
      </Routes>
    </Router>
    </>
  )
}

export default App
