import { useEffect, useRef, useState } from "react";
import { FiShoppingBag, FiSearch, FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import SouqhLogo from '../assets/logos/souqh-no-bg-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); 

  useEffect(() => {
    gsap.fromTo(
      navRef.current.children, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
       
        <a href="/" className="text-2xl font-bold text-gray-800 w-18">
          <img src={SouqhLogo} alt="" />
        </a>

        <nav className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
          <ul ref={navRef} className="md:flex space-x-6 text-gray-700">
            {["Home", "About", "Shop", "Projects", "News"].map((item, index) => (
              <li key={index} className="opacity-0">
                <a href="#" className="hover:text-[#E6553A]">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search..." className="hidden md:block border rounded px-3 py-1" />
            <FiSearch className="absolute top-2 right-2 text-gray-500" />
          </div>
          <div className="flex items-center space-x-2">
            <FiShoppingBag className="text-xl text-gray-700" />
            <span className="text-gray-700">(0)</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
