import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Highlights from './components/Highlights/Highlights'
import Table from './components/Table/Table'

const App = () => {
  return (
    <div className='Body'>
      <Navbar/>
      <Table/>
      <Highlights/>
      <Footer/>
    </div>
  )
}

export default App

 
