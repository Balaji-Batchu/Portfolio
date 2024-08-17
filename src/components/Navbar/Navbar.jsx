import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import react-scroll
import ButtonWithLink from '../ButtonWithLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#03120fe5] text-amber-200 py-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap px-4">
        {/* Left Section - Name */}
        <div id="name" className="text-4xl font-extrabold font-qwitcher">
          Balaji Batchu
        </div>

        {/* Center Section - Navigation (Desktop) */}
        <nav className="relative hidden md:flex flex-grow justify-center space-x-12 gap-8 text-lg">
          <Link to="home" smooth={true} duration={500} className="relative group cursor-pointer">
            <span className="hover:text-teal-300 transition-colors duration-300">Home</span>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
          </Link>
          <Link to="experience" smooth={true} duration={500} className="relative group cursor-pointer">
            <span className="hover:text-teal-300 transition-colors duration-300">Experience</span>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
          </Link>
          <Link to="Projects" smooth={true} duration={1500} className="relative group cursor-pointer">
            <span className="hover:text-teal-300 transition-colors duration-300">Projects</span>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
          </Link>
          <Link to="contact" smooth={true} duration={1500} className="relative group cursor-pointer">
            <span className="hover:text-teal-300 transition-colors duration-300">Contact Me</span>
            <div className="absolute left-0 bottom-0 w-full h-1 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
          </Link>
        </nav>

        <ButtonWithLink
          name="Let's Connect" 
          sty="bg-teal-800 hover:bg-opacity-80 text-amber-200" 
          link="https://linkedin.com/in/balajibatchu"
          path="new"
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-amber-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-[#161513] bg-opacity-90 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center justify-center h-full space-y-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-4 right-4 text-amber-200 text-xl font-bold hover:text-teal-300"
          onClick={toggleMenu}
        >
          X
        </button>
          <Link to="home" smooth={true} duration={500} className="text-amber-200 text-lg hover:text-teal-300 transition-colors duration-200" onClick={toggleMenu}>Home</Link>
          <Link to="experience" smooth={true} duration={500} className="text-amber-200 text-lg hover:text-teal-300 transition-colors duration-200" onClick={toggleMenu}>Experience</Link>
          <Link to="Projects" smooth={true} duration={500} className="text-amber-200 text-lg hover:text-teal-300 transition-colors duration-200" onClick={toggleMenu}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="text-amber-200 text-lg hover:text-teal-300 transition-colors duration-200" onClick={toggleMenu}>Contact Me</Link>
          <ButtonWithLink
            name="Let's Connect" 
            sty="bg-teal-800 hover:bg-opacity-80 text-amber-200" 
            link="https://linkedin.com/in/balajibatchu"
            path="new"
          />
          <div className='p-2 text-nowrap bg-emerald-600 rounded-sm'>
            <a href='https://linkedin.com/in/balajibatchu' target='_blank' >Let's Connect</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
