import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Men from './Men'
import Women from './Women'
import Kids from './kids'

function App() {
  

  return (
    <>
    <Header />
      <h1 style={{fontSize:'190px', color:'#f4a007 '}}>FIND YOUR STYLE</h1>
      <Men />
      <Women />       
      <Kids />
    </>
  )
}

export default App
