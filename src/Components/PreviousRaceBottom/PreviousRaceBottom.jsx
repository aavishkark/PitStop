import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './previousracebottom.css';

gsap.registerPlugin(ScrollTrigger);

const PreviousRaceBottom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-card', {
        scrollTrigger: {
          trigger: '.previous-race-stories',
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
      
      gsap.from('.video-card', {
        scrollTrigger: {
          trigger: '.previous-race-videos',
          start: 'top 85%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
      });

      gsap.from(['.previous-race-stories-title', '.previous-race-videos-title'], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="previous-race-bottom" ref={containerRef}>
      <p className="previous-race-stories-title">Stories</p>
      <div className="previous-race-stories">
        <div className="previous-race-stories-left">
          <div className="story-card">
            <p>Russell's Singapore GP Comeback</p>
            <img src="/Images/russell.jpg" alt="Russell" />
            <button className="read-more-btn">
              <a
                href="https://formulanerds.com/explainer/f1/george-russell-celebrates-f1-comeback-following-singapores-missed-opportunity/"
                target="_blank"
              >
                Read More
              </a>
            </button>
          </div>
        </div>
        <div className="previous-race-stories-right">
          <div className="story-card">
            <p>McLaren wins WCC</p>
            <img src="/Images/mclaren.jpg" alt="McLaren" />
            <button className="read-more-btn">
              <a
                href="https://www.mclaren.com/racing/heritage/formula-1/2025-championship/"
                target="_blank"
              >
                Read More
              </a>
            </button>
          </div>
          <div className="story-card">
            <p>Piastri–Norris collide, WDC race intensifies</p>
            <img src="/Images/norris-piastri-collision.jpg" alt="Collision" />
            <button className="read-more-btn">
              <a
                href="https://racingnews365.com/oscar-piastri-fumes-over-team-radio-after-lando-norris-collision"
                target="_blank"
              >
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="previous-race-videos">
        <p className="previous-race-videos-title">Videos</p>
        <div className="video-cards-container">
          <div className="video-card">
            <p>Qualifying Highlights</p>
            <img src="/Images/qualifying.jpg" alt="Qualifying Highlights" />
            <button className="watch-btn">
              <a
                href="https://www.youtube.com/watch?v=XZhXFbFCOu4"
                target="_blank"
              >
                Watch
              </a>
            </button>
          </div>
          <div className="video-card">
            <p>Race Highlights</p>
            <img src="/Images/highlights.jpg" alt="Race Highlights" />
            <button className="watch-btn">
              <a
                href="https://www.youtube.com/watch?v=Sq02V0i0_BE"
                target="_blank"
              >
                Watch
              </a>
            </button>
          </div>
          <div className="video-card">
            <p>Piastri–Norris Collision</p>
            <img src="/Images/norris-piastri-collision.jpg" alt="Piastri Norris Collision" />
            <button className="watch-btn">
              <a
                href="https://www.youtube.com/shorts/tzzPzEl_yQE"
                target="_blank"
              >
                Watch
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousRaceBottom;