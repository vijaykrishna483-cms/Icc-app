import React,{useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className='header'>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={toggleMenu}>
            ✖
          </button>
          
          <ul>
          <div className='list'>
            <div className='logoimg'> <img src="icclogo.png" alt="" className='logo'/></div>
            <div> <li><a href="#home" className='Home'> HOME</a></li></div>
            <div> <li><a href="#services">MATCHES</a></li></div>
            <div><li><a href="#about">STANDINGS</a></li></div>
            <div><li><a href="#contact">NEWS</a></li></div>
            <div><li><a href="#home">VIDEOS</a></li></div>
            <div><li><a href="#services">TEAMS</a></li></div>
            <div> <li><a href="#about">STATS</a></li></div>
            <div> <li><a href="#contact">FANTASY</a></li></div>
            <div> <li><a href="#contact">FAN PASSPORT</a></li></div>
            <div> <li><a href="#home">PREDICTOR</a></li></div>
            <div><li><a href="#services">BUY TICKETS</a></li></div>
            <div><li><a href="#about">POLLS</a></li></div>
            <div>  <li><a href="#contact">PLAYERS OF THE MATCH</a></li></div>
            <div> <li><a href="#about">ABOUT</a></li></div>
            <div><li><a href="#contact">ICC HOME</a></li></div>
            
            </div>
          </ul>

       
          
        </nav>

        <div>
        <img src="icclogo.png" alt="" className='logo'/>
        </div>
        <div>
        <nav className='navbar'>
            <a href="/">ICC HOME</a>
            <a href="/">MATCHES</a>
            <a href="/">STANDINGS</a>
            <a href="/">NEWS</a>
            <a href="/">VIDEOS</a>
            <a href="/">FAN PASSPORT</a>
            <a href="/">FANTASY</a>
            <a href="/">PRETICOR</a>
            <a href="/">TICKETING</a>
            <a href="/">MORE</a>
        </nav>
        

        </div>
     <div className='search'>
      <div  className='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
     
     <a href="/">SEARCH</a>
     </div>
     <div className='signin'>
      <div className='icon'><FontAwesomeIcon icon={faUser} /></div>
     
     <a href="/">SIGN IN</a>
     </div>
    </header>
  )
}

export default Navbar
