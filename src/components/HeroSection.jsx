import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current, 
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Final state
    );
  }, []);

  return (
    <section ref={heroRef} className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-5xl font-bold text-[#E6553A]">Hello, Welcome to SOUQH</h1>
    </section>
  );
};

export default HeroSection;
