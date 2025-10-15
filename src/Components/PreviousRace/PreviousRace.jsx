import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import './previousrace.css'

gsap.registerPlugin(ScrollTrigger);

const PreviousRace = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const raceResults = {
    1: { driver: "George Russell", time: "1:40.22.367", points: 25 },
    2: { driver: "Max Verstappen", time: "+5.430s", points: 18 },
    3: { driver: "Lando Norris", time: "+6.066s", points: 15 },
    4: { driver: "Oscar Piastri", time: "+8.146s", points: 12 },
    5: { driver: "Kimi Antonelli", time: "+33.681s", points: 10 },
    6: { driver: "Charles Leclerc", time: "+45.996s", points: 8 },
    7: { driver: "Fernando Alonso", time: "+80.667s", points: 6 },
    8: { driver: "Lewis Hamilton", time: "+85.251s", points: 4 },
    9: { driver: "Oliver Bearman", time: "+93.527s", points: 2 },
    10: { driver: "Carlos Sainz", time: "+1 lap", points: 1 },
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startValue = isMobile ? "top 50%" : "top 50%";
    const endValue = isMobile ? "10% top" : "bottom 99%";

    //sec3
    // const startValue = isMobile ? "top 15%" : "center 45%";
    // const endValue = isMobile ? "center 35%" : "bottom 10%";

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
  }, [isMobile]);

  return (
    <>
      <section ref={containerRef} className="video-section">  
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="/Videos/sec9.mp4"
            muted
            playsInline
            preload="auto"
            className="video"
          />
          <div className="video-text">
            <div className="video-text-header">
              <span className="video-text-heading">Singapore</span>
              <p className="video-text-subheading">Russle's Redemption at lion city</p>
            </div>
            <table className="race-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Driver</th>
                  <th>Time / Gap</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(raceResults).map(([position, result]) => (
                  <tr key={position}>
                    <td>{position}</td>
                    <td>{result.driver}</td>
                    <td>{result.time}</td>
                    <td>{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousRace;
