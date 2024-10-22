import React from 'react'
import './Section3.css'
import image1 from '../../assets/lists/list-image-1.png'
import image2 from '../../assets/lists/list-image-2.png'
import image3 from '../../assets/lists/list-image-3.png'
import image4 from '../../assets/lists/list-image-4.png'
import image5 from '../../assets/lists/list-image-5.png'
import image6 from '../../assets/lists/list-image-6.png'

const Section3 = () => {
  return (
    <div className='section3-container'>
        <div className="section3">
            <div className="section3-title">
        <h1>All the good things you get access to</h1>
        </div>
        <div className="list-container">
            <div className="lists">
                <div className="list">
                    <div style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                        <h2 className='list-number'>1</h2>
                        <h2>30+ Ad Networks</h2>
                    </div>
                    <p>Maximize competition for your ad inventory with premium ad networks including CPM ad networks and gain access to demand from top players like Google, Amazon, Xander, Index Exchange, etc.</p>
                </div>
                <div className="list-image">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="lists">
                <div className="list">
                    <div style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                        <h2 className='list-number'>2</h2>
                        <h2>Improved Page Speed</h2>
                    </div>
                    <p>AdPushup’s bundle size reduction ensures that ads do not affect the website's core web vitals.</p>
                </div>
                <div className="list-image">
                    <img src={image2} alt="" />
                </div>
            </div>
            <div className="lists">
                <div className="list">
                    <div style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                        <h2 className='list-number'>3</h2>
                        <h2>360-Degree Reporting</h2>
                    </div>
                    <p>Find out which ad networks earn the most for you and at what time of day- all in one dashboard.</p>
                </div>
                <div className="list-image">
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="lists">
                <div className="list">
                    <div style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                        <h2 className='list-number'>4</h2>
                        <h2>Best AdSense Alternative</h2>
                    </div>
                    <p>Diversify your revenue streams further with Adpushup. Utilize our unique ad formats, advanced targeting options, to maximize ad inventory potential and enhance your earnings.</p>
                </div>
                <div className="list-image">
                    <img src={image4} alt="" />
                </div>
            </div>
            <div className="lists">
                <div className="list">
                    <div style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                        <h2 className='list-number'>5</h2>
                        <h2>Access to Premium Demand Partners</h2>
                    </div>
                    <p>Amplify your ad revenue with access to the premium Supply Side Platforms, connecting you with a wide range of demand sources and high-quality advertisers.</p>
                </div>
                <div className="list-image">
                    <img src={image5} alt="" />
                </div>
            </div>
            <div className="lists">
                <div className="list">
                    <div style={{display: 'flex', gap:'20px', alignItems: 'center'}}>
                        <h2 className='list-number'>6</h2>
                        <h2>Results-Driven Ad Ops Team</h2>
                    </div>
                    <p>Results-driven ad ops team committed to skyrocketing your ad revenue. Best of all, our ad ops team is fueled by dedication, so you can be rest assured knowing you’re bound to have substantial growth.</p>
                </div>
                <div className="list-image">
                    <img src={image6} alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section3