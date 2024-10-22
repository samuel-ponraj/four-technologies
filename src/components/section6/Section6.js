import React from 'react'
import './Section6.css'
import prebid from '../../assets/techs/prebid.png'
import amp from '../../assets/techs/amp.png'
import google from '../../assets/techs/google.png'


const Section6 = () => {
  return (
    <div className='section6-container'>
        <div className="section6">
            <h1>AdPushup Integrates with Your Current Ad Stack</h1>
            <div className="images">
                <img src={prebid} alt="" width='161px' height='41px'/>
                <img src={amp} alt="" width='161px' height='60px'/>
                <img src={google} alt="" width='161px' height='21px'/>
            </div>
        </div>
    </div>
  )
}

export default Section6