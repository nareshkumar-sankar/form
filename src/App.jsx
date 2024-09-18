import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div id='wraper'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
