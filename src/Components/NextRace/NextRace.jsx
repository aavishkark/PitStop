import React from 'react';
import './nextrace.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


const NextRace = () => {

  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const stories = [
    {
      title: 'Epic Overtake',
      description: 'A stunning wheel-to-wheel battle on lap 45 made this one unforgettable.',
      thumbnail: '/Images/usgpmap.jpg',
    },
    {
      title: 'Unexpected Rain',
      description: 'Rain changed everything mid-race and led to a dramatic finish.',
      thumbnail: '/Images/usgpmap.jpg',
    },
    {
      title: 'Pit Stop Masterclass',
      description: 'Fastest pit stop of the season — pure precision from the crew.',
      thumbnail: '/Images/usgpmap.jpg',
    },
  ];

const data = {
    circuit: "Circuit of the Americas",
    location: 'Austin, Texas',
    date: '12/22/22',
    length: '5.4 km',
    turns: '15',
    raceDistance: '360 km',
    lapRecord: '1:43.432 (Charles Leclerc)',
};

  useEffect(() => {

    const video = videoRef.current;
    if (!video) return;

    const startValue = isMobile ? "top 50%" : "top 80%";
    const endValue = isMobile ? "10% top" : "bottom 99%";

    const ctx = gsap.context(() => {
      gsap.from('.circuit-top-row', {
        scrollTrigger: {
          trigger: '.circuit-info',
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
      
      gsap.from('.story-card', {
        scrollTrigger: {
          trigger: '.circuit-stories',
          start: 'top 85%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        // y: 80,
        duration: 1,
        stagger: 0.25,
        ease: 'power3.out',
      });
    }, containerRef);

    video.onloadedmetadata = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: startValue,
          end: endValue,
          scrub: 0.2,
          onEnter: () => containerRef.current.style.backgroundColor = "#050303",
          onLeave: () => containerRef.current.style.backgroundColor = "transparent",
          onEnterBack: () => containerRef.current.style.backgroundColor = "#050303",
          onLeaveBack: () => containerRef.current.style.backgroundColor = "transparent",
        },
      }).to(video, {
        currentTime: video.duration,
        ease: "none",
      });

      ScrollTrigger.refresh();
    };

    return () => ctx.revert();
  }, []);

  return (
    <div className="next-race-section" ref={containerRef}>
      <h2 className="section-title">Next Race</h2>

      <div className="circuit-top-row">
        <div className="circuit-image">
          <img src="/Images/usgpmap.jpg" alt="Circuit Map" />
        </div>

        <div className="circuit-info">
          <table>
            <tbody>
              <tr><th>Circuit</th><td>{data.circuit}</td></tr>
              <tr><th>Location</th><td>{data.location}</td></tr>
              <tr><th>Date</th><td>{data.date}</td></tr>
              <tr><th>Track Length</th><td>{data.length}</td></tr>
              <tr><th>Turns</th><td>{data.turns}</td></tr>
              <tr><th>Race Distance</th><td>{data.raceDistance}</td></tr>
              <tr><th>Lap Record</th><td>{data.lapRecord}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="circuit-stories">
        {stories.map((story, index) => (
          <div key={index} className="story-card small">
            <img src={story.thumbnail} alt={story.title} className="story-image" />
            <div className="story-content">
              <h4>{story.title}</h4>
              <p>{story.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="/Videos/cota.mov"
            muted
            playsInline
            preload="auto"
            className="video"
          />
        </div>
    </div>
  );
};

export default NextRace;