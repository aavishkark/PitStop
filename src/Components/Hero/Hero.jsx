import './hero.css';
//import gsap from 'gsap';
import Slides from '../../../Constants/Index';
import Slide from '../Slides/Slides';

const Hero = () => {
  return (
    <section id='hero'>
        <div id='foreground'>
            <img className='heroImg' src='Images/herobg.gif'/>    
        </div>
        <Slide Slides={Slides} />
    </section>
  );
};

export default Hero;