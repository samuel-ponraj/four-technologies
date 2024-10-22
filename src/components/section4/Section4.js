import React, { useEffect } from 'react'
import './Section4.css'
import card1 from '../../assets/cards/card1.svg'
import card2 from '../../assets/cards/card2.svg'
import card3 from '../../assets/cards/card3.svg'
import card4 from '../../assets/cards/card4.svg'
import card5 from '../../assets/cards/card5.svg'
import card6 from '../../assets/cards/card6.svg'

const Section4 = () => {

    useEffect(() => {
        
        const cards = document.querySelectorAll('.cards');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible'); 
            }
          });
        });
    
        cards.forEach((card) => {
          observer.observe(card); 
        });
    
      
        return () => {
          cards.forEach((card) => observer.unobserve(card));
        };
      }, []);

  return (
    <div className='section4-container'>
        <div className="section4">
            <div className="section4-heading">
                <h1>Just some reasons why publishers partner with us</h1>
            </div>
            <div className="cards-container">
                <div className="cards">
                    <img src={card1} alt="" />
                    <h2>Higher Demand</h2>
                    <p>Access to demand from 50+ tier-1 ad exchanges, including Google AdX and OpenX</p>
                </div>
                <div className="cards">
                    <img src={card2} alt="" />
                    <h2>Insightful Reporting</h2>
                    <p>Unified reporting with easily identifiable metrics and in-depth analysis to fine-tune performance</p>
                </div>
                <div className="cards">
                    <img src={card3} alt="" />
                    <h2>Improved Viewability</h2>
                    <p>Improved ad viewability score with ad formats like sticky ads, docked ads, native ads across devices</p>
                </div>
                <div className="cards">
                    <img src={card4} alt="" />
                    <h2>AdBlock Solutions</h2>
                    <p>Potential to earn back revenue lost to ad blockers with pro-user ad-reinsertion technology</p>
                </div>
                <div className="cards">
                    <img src={card5} alt="" />
                    <h2>Better Clickthrough-Rates</h2>
                    <p>Significant increase in clickthrough rates owing to reduced banner blindness for ad inventory</p>
                </div>
                <div className="cards">
                    <img src={card6} alt="" />
                    <h2>Faster Page-Loading</h2>
                    <p>Minimized page latency with modular code generation, lazy loading, and CDN-based delivery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4