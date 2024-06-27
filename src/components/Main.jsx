import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Highlights from './Highlights/Highlights'
import Table from './Table/Table'
import './Main.css'
import Underline from './Underline/Underline'
import Card from './Card/Card'

const Main = () => {
  return (
    <div className='Body'>
        <div className='Headbar'> <Navbar/></div>
      <div className='tablene'><Table/></div>
      <Underline/>
    
     
      <Highlights/>
      <Footer/>
    </div>
  )
}

export default Main

 
