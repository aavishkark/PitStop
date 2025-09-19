import React, { useState } from 'react';
import './slides.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
const Slide = (Slides) => {
        let [num, setnum] = useState(1);

        const slides = Slides.Slides;

        console.log(slides)

        let [activeslide, setactiveslide] = useState(slides[num-1]);

        useGSAP(()=>{
        gsap.fromTo('#slideImg',{
            x: 600, y: 0
        },
        {
            x: 0, y: 0
        })
    });

    const updateSlide = (btn) => {

        let newnum = num;
        if(btn === 'back'){
            if(num === 1){
                newnum = slides.length
            }
            else{
                newnum = num - 1
            }
        }
        else if(btn === 'fore'){
            if(num === slides.length){
                newnum = 1
            }
            else{
                
                newnum = num + 1
            }
        }
        setnum(newnum)
        setactiveslide(slides[newnum - 1]);

    }


  return (
    <div className='container'>
        <div className='slide'>
            <div className='heading'>
                {activeslide.heading}
            </div>
            <div className='subHeading'>
                {activeslide.subHeading}
            </div>
            <button className='heroBtn'>Learn More</button>
            <img src={`${activeslide.src}`} id='slideImg' alt='oscar on podium'/>
        </div>
        <div className='dots'>
            {slides.map((slide)=>
                slide.id === activeslide.id ? 
                <div className='dot active' key={slide.id}>{'o'}</div> :
                <div className='dot' key={slide.id}>{'o'}</div>
            )}
        </div>
        <div className='arrows'>
            <img onClick={()=>{updateSlide('back')}} src='Icons/left-arrow.svg'/>
            <img onClick={()=>{updateSlide('fore')}} src='Icons/right-arrow.svg'/>
        </div>
    </div>
  );
};

export default Slide;