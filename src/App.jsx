import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Men from './Men'
import Women from './Women'
import Kids from './kids'
import MenPage from './MenPage'
import WomenPage from './WomenPage'
import KidsPage from './KidsPage'
import { CartProvider } from './CartContext';

function App() {



  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <>
              <Header />
              <h1 style={{ fontSize: '190px', color: '#f4a007 ' }}>FIND YOUR STYLE</h1>
              <Men />
              <Women />
              <Kids />
            </>
          }/>
          <Route path="/men" element={<MenPage/>}/>
          <Route path='/women' element={<WomenPage/>}/>
          <Route path='/kids' element={<KidsPage/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
