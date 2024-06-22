import React from 'react'
import Home from './Components/Home'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Market from './Components/Market'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FreeCard from './Components/FreeCard'
import Signup from './Components/Signup'

function App() {
  return (
    <div className='dark:bg-slate-900 '>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/market' element ={<Market/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/contact' element ={<Contact/>} />   
      <Route path='/signup' element={<Signup />} />   
    </Routes>
    </BrowserRouter>
    <Footer/>

    </div>
  )
}

export default App

