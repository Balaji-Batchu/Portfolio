import React from 'react';
import ButtonWithLink from '../ButtonWithLink';
import Navbar from '../Navbar/Navbar';

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[94vh] bg-[#020d0be5] text-amber-200 px-4 py-2">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <img rel='preload'
            src="/profile-pic.png" 
            alt="Alex Bennett" 
            className="w-32 h-32 md:w-60 md:h-60 rounded-full mb-4 object-cover"
          />
          {/* Introduction Text */}
          <div className="mb-8 hover:cursor-default group relative">
            <h1 className="font-bold">
              <p className='height_adjust gradient text-3xl md:text-4xl lg:text-6xl group-hover:gradient-reverse'>
                I'm Balaji Batchu,
              </p>
              <p className='text-xl md:text-2xl lg:text-5xl text-[#86daa3] group-hover: decoration-amber-100'>
                Java Fullstack Developer, NIC
              </p>
            </h1>
            <p className="text-base md:text-lg lg:text-xl max-w-md mx-auto text-yellow-50 mt-4 relative">
                I am a&nbsp;
                <span className="relative inline-block">
                    <span>Java FullStack Developer</span>
                    <span className="block absolute left-0 bottom-0 w-full h-0.5 bg-[#86daa3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <span>&nbsp;from Bengaluru, <br />with over 1+ Years of experience, <br />National Informatics Centre.</span>
            </p>

          </div>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <ButtonWithLink name="Let's Connect" path="new" link="https://linkedin.com/in/balajibatchu" sty="bg-teal-800 hover:bg-opacity-80 text-amber-200 hover:text-amber-300 hover:outline outline-offset-4 outline-teal-800" />
            <ButtonWithLink name="Download Resume" path="parent" link={"https://drive.google.com/uc?id=1R0SBxc5h2KIkOJ8sn4yNRT60bmWi7iy3&export=download"} sty="bg-amber-200 font-medium text-teal-900 hover:text-teal-900 hover:bg-amber-300 text-teal-200 hover:outline outline-offset-4 outline-amber-200" />
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
