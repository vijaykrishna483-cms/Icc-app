import React from 'react'
import './Card.css'

const Card = ({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    link,
}) => {
  return (
    <div className='card'>
      <img src={imgSrc} alt='' className='cardimg'/>
      <p className='carddescription'>{description}</p>
      <h2 className='cardheading'>{title}</h2>
      
    </div>
  )
}

export default Card
