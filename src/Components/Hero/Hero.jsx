import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id='hero'>
        <div id='foreground'>
            <img src='Images/herobg.gif'/>    
        </div>
        <div className='slide'>
            <div className='heading'>
                The Papaya <br/> Takeover
            </div>
            <div className='subHeading'>
                With Oscar and lando leading the Championship see how <br/> Maclaren is dominating the 2025 Season.
            </div>
            <button className='heroBtn'>Learn More</button>
            <img src='/Images/oscar.png' id='oscarhero' alt='oscar on podium'/>
            {/* <img src='/Images/norris.png' id='norrishero' alt='lando on podium'/>   */}
        </div> 
    </section>
  );
};

export default Hero;