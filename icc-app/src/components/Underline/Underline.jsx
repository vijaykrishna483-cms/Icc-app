import React, { useState } from 'react';
import Highlights from '../Highlights/Highlights.jsx';
import './Underline.css'
import  Player from '../Playerofthematch/Player.jsx'
import Stories from '../Stories/Stories.jsx'
import Card from '../Card/Card.jsx'


const Navbar = () => {
  const [visibleDiv, setVisibleDiv] = useState('LATEST VIDEOS');

  const handleClick = (divName) => {
    setVisibleDiv(divName);
  };

  const navItems = [
    'TOP STORIES',
    'MATCH HIGHLIGHTS',
    'PLAYER-HIGHLIGHTS',
    'EXTENDED HIGHLIGHTS'
  ];

  const divContent = {
    'TOP STORIES': <div ><Stories/></div>,
    'MATCH HIGHLIGHTS': <div ><Highlights/></div>,
    'PLAYER-HIGHLIGHTS': <div className='playerhighlights'><Player/></div>,
    'EXTENDED HIGHLIGHTS': <div >  <h1>EXTENDED HIGHLIGHTS</h1>
      <div className='cardrow'>
    <Card imgSrc="33.png"  
          title="All-round brilliance secures Sri Lanka comfortable win against Netherlands | Match Highlights | T20WC 2024"
          description="ICC Men's T20 World Cup, 2024"
          buttonText="Watch video"
          />
      <Card imgSrc="33.png"  
          title="All-round brilliance secures Sri Lanka comfortable win against Netherlands | Match Highlights | T20WC 2024"
          description="ICC Men's T20 World Cup, 2024"
          buttonText="Watch video"
          />
           <Card imgSrc="33.png"  
          title="All-round brilliance secures Sri Lanka comfortable win against Netherlands | Match Highlights | T20WC 2024"
          description="ICC Men's T20 World Cup, 2024"
          buttonText="Watch video"
          />
           <Card imgSrc="33.png"  
          title="All-round brilliance secures Sri Lanka comfortable win against Netherlands | Match Highlights | T20WC 2024"
          description="ICC Men's T20 World Cup, 2024"
          buttonText="Watch video"
          />
    </div></div>
  };
 
  return (
    <div className='nav'>
     <div className='videos'>VIDEOS</div>
      <nav className="navbarr">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${visibleDiv === item ? 'active' : ''}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </nav>
      
      

      {navItems.map((item) => (
        visibleDiv === item && <div key={item}>{divContent[item]}</div>
      ))}
    </div>
  );
};

export default Navbar;
