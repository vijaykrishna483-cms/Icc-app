import React from 'react'
import './Table.css'
const Table = () => {
  return (
  
  
    
    <main>
      
      <div className='colmone'>  <div className='head'>POS </div>
        <div className='rowq'>1</div>
        <div className='rowq'>2</div>
        <div className='rowq'>3</div>
        <div className='rowq'>4</div>
       
      </div>
      
      <div  className='one'> <div className='head'>TEAM </div>
        <div className='row'> <img src="AFG.png" alt="" className='AFGIMG'/>AFG</div>
        <div className='row'> <img src="AUS.png" alt="" className='AFGIMG'/>AUS</div>
        <div className='row'> <img src="BAN.png" alt="" className='AFGIMG'/>BAN</div>
        <div className='INDrow'> <img src="IND.png" alt="" className='AFGIMG'/>IND</div>
      </div>
      <div  className='two'> <div className='head'>PLD</div>
        <div className='rowq'>0</div>
        <div className='rowq'>0</div>
        <div className='rowq'>0</div>
        <div className='rowq'>0</div>
      </div>
      <div  className='three'> <div className='head'>NRR</div>
        <div className='rowq'>-</div>
        <div className='rowq'>-</div>
        <div className='rowq'>-</div>
        <div className='rowq'>-</div>
      </div>
      <div className='four'> <div className='head'>PTS</div>
       <div className='rowq'>0</div>
        <div className='rowq'>0</div>
        <div className='rowq'>0</div>
        <div className='rowq'> 0</div>
      </div>
    </main>
 
    
    
 
  )
}

export default Table
