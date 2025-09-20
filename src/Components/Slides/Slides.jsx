import React, { useState } from 'react';
import './slides.css';
import { useGSAP } from '@gsap/react';
import gsap, { SplitText } from 'gsap/all';
import _SplitText from 'gsap/SplitText';
const Slide = (Slides) => {
    let [num, setnum] = useState(1);

    const slides = Slides.Slides;


    let [activeslide, setactiveslide] = useState(slides[num-1]);

    useGSAP(() => {
        document.querySelectorAll('.heading, .subHeading').forEach(el => {
            el.innerHTML = el.textContent;
        });

        const headingSplit = new SplitText('.heading', { types: 'chars' });
        const subHeadingSplit = new SplitText('.subHeading', { types: 'lines' });

        gsap.from(headingSplit.chars, {
            x: -100,
            skewX: 45,
            opacity: 0,
            ease: 'power4.out',
            duration: 1,
            stagger: 0.03,
        });

        gsap.fromTo(subHeadingSplit.lines, {
            y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.3,
        },
        {
            y: 0,
            opacity: 1 
        });

        gsap.fromTo('#slideImg',
            { x: -500, y: -500, rotation: 0, scale: 26, opacity: 0 },
            { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power' }
        );

        },[activeslide]);


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

    const dotClick = (num) =>{
        let newnum = Number(num);
        setnum(newnum);
        setactiveslide(slides[newnum - 1])
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
                <div className='dot active' key={slide.id} onClick={()=>{dotClick(slide.id)}}>{'o'}</div> :
                <div className='dot' key={slide.id} onClick={()=>{dotClick(slide.id)}}>{'o'}</div>
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