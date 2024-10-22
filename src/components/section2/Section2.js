import React from 'react'
import './Section2.css'
import image1 from '../../assets/awards/image1.png'
import image2 from '../../assets/awards/image2.png'
import image3 from '../../assets/awards/image3.png'
import image4 from '../../assets/awards/image4.png'

const Section2 = () => {
  return (
    <div className='section2-container'>
        <h1>Membership & Accolades</h1>
        <div className="image-container">
            <img src={image1} alt="" style={{ width: '222px', height: '84px' }}/>
            <img src={image2} alt="" style={{ width: '120px', height: '124px' }}/>
            <img src={image3} alt="" style={{ width: '94px', height: '122px' }}/>
            <img src={image4} alt="" style={{ width: '230px', height: '61px' }}/>
        </div>
    </div>
  )
}

export default Section2