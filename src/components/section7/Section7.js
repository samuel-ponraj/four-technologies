import React from 'react'
import './Section7.css'
import image from '../../assets/image.png'

const Section7 = () => {
  return (
    <div className='section7-container'>
        <div className="section7">
            <p><span style={{fontWeight: '600'}}>We make earning big on ads seem effortless.</span> Just like you make growing big on publishing seem effortless.</p>
            <img src={image} alt="" width='280px' height='auto'/>
        </div>
    </div>
  )
}

export default Section7