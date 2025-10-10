import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "10% top" : "bottom top";

    video.onloadedmetadata = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
        },
      }).to(video, {
        currentTime: video.duration,
        ease: "none",
      });

      ScrollTrigger.refresh();
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="video absolute inset-0">
      <h1>Hellloo</h1>
      <video
        ref={videoRef}
        src="/Videos/output.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Animation;
