import React from 'react'
import '../../styles/content/welcom-content/welcome-block.css';

const Card = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map(item => (
        <div className='card'>
        <div className='welcom-cont'>
            <h2>{item.title}</h2>
          </div>
          <div className='text-cont'>
            <p>{item.paragraph}</p>
            <p>{item.paragraphSecond}</p>
          </div>
          </div>
      ))}
   </div>
  )
}

export default Card