import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChckImage from "../../assets/logos/souqh-no-bg-logo.png";

const HeroSection = ({ nextSectionRef }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const dRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 3,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(textRef.current, { x: "-60%", ease: "power2.out", duration: 2 });

    tl.to(dRef.current, {
      scale: 8,
      x: "-50%",
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(window, {
          scrollTo: { y: nextSectionRef.current, autoKill: false },
          duration: 2,
          ease: "power2.out",
        });
      },
    });

    tl.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
    }, "-=1");

    return () => tl.kill();
  }, []);

  return (
    <section ref={heroRef} className="h-screen w-full bg-[#E35938] flex items-center justify-start overflow-hidden px-4 sm:px-8">
      <h1 ref={textRef} className="text-[clamp(5vw,17vw,20vw)] font-bold uppercase text-white whitespace-nowrap pl-[5vw]">
        Experience With S<span ref={dRef} className="inline-block">O</span>UQH
      </h1>

      <div className="absolute inset-0 flex justify-center items-center">
        <img ref={imageRef} src="" alt="Pop Image" className="w-[50vw] h-auto opacity-0 scale-0 transition-all duration-700" />
      </div>
    </section>
  );
};

export default HeroSection;
