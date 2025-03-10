import { useGSAP } from "@gsap/react";
import "./App.css";
import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/Navbar";
import NextComponent from "./components/NextComponent";
import gsap from "gsap";
import { useRef } from "react";

function App() {
  const nextSectionRef = useRef(null);

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

export default App;
