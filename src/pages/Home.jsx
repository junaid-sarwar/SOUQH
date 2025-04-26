// src/pages/Home.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import HeroSection from "../components/herosection/HeroSection";
import NextComponent from "../components/NextComponent";

export default function Home() {
  const nextSectionRef = useRef(null);

  useGSAP(() => {
    // Example animation
    gsap.to(".hero", { opacity: 1, duration: 1 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-blue-400 text-[clamp(2vw,10vw,10vw)] font-bold uppercase text-white whitespace-nowrap pl-[5vw]">
        Below
      </section>
      <HeroSection nextSectionRef={nextSectionRef} />
      <section ref={nextSectionRef} className="relative">
        <NextComponent />
      </section>
    </>
  );
}
