import { useGSAP } from '@gsap/react';
import './navbar.css';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Navbar = () => {

  useGSAP(() => {
    const links = document.querySelectorAll('.navLink a');

    links.forEach((link) => {
      const underline = link.querySelector('.underline');

      link.addEventListener('mouseenter', () => {
        gsap.fromTo(
          underline,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.1,
            ease: "back.inOut"
          }
        );
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.1,
          ease: 'power2.in'
        });
      });
    });
  }, []);

  const menuClick = ()=>{
      const navLinksMobileRef = document.querySelector('#navLinksMobile');
      if(navLinksMobileRef.classList[0] === 'navMobileHidden'){
          navLinksMobileRef.classList.remove('navMobileHidden');
          navLinksMobileRef.classList.add('navMobileVisible');

          gsap.fromTo(
            navLinksMobileRef,
            { x: '100%' },
            { x: '0%', duration: 0.4, ease: 'sine' }
          );
      }
      else if(navLinksMobileRef.classList[0] === 'navMobileVisible'){
          gsap.fromTo(
            navLinksMobileRef,
            { x: '0%' },
            {
              x: '100%',
              duration: 0.5,
              ease: 'circ.inOut',
              onComplete: () => {
                navLinksMobileRef.classList.remove('navMobileVisible');
                navLinksMobileRef.classList.add('navMobileHidden');
                gsap.set(navLinksMobileRef, { clearProps: 'all' });
              }
            }
          );
      }
  }
  return (
    <>
      <div id='navLinksMobile' className='navMobileHidden'>
            <div className='navLink'><a href='#'>Team<span className='underline'></span></a></div>
            <div className='navLink'><a href='#'>Driver<span className='underline'></span></a></div> 
            <div className='navLink'><a href='#'>Tracks<span className='underline'></span></a></div> 
            <div className='navLink'><a href='#'>Schedule<span className='underline'></span></a></div> 
            <div className='navLink'><a href='#'>Championship<span className='underline'></span></a></div>
            <div className='closeMobileNav' onClick={menuClick}><img src='/Icons/close.svg' alt='closeBtn'/></div>  
      </div>
      <nav>
          <div className='logo'>
              <a href='#'><img src='/Images/PitStop.png' alt='logo'/></a>
          </div>
          <div id='navLinks'>
            <div className='navLink'><a href='#'>Team<span className='underline'></span></a></div>
            <div className='navLink'><a href='#'>Driver<span className='underline'></span></a></div> 
            <div className='navLink'><a href='#'>Tracks<span className='underline'></span></a></div> 
            <div className='navLink'><a href='#'>Schedule<span className='underline'></span></a></div> 
            <div className='navLink'><a href='#'>Championship<span className='underline'></span></a></div>  
          </div>
          <div className='menu' onClick={menuClick}>
            <img src='/Icons/menu.svg' alt='logo'/>
          </div>
      </nav>
    </>
  );
};

export default Navbar;