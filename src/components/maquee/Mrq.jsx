import React from 'react';
import Marquee from 'react-fast-marquee';

// Define the skills array
const skills = [
  'Java', 'Spring Boot', 'Spring Security', 'J2EE', 'React.js', 'jQuery', 
  'Oracle', 'VS Code', 'Git', 'Spring Tool Suite'
];

// Skill component
const Skill = ({ s }) => {
  return (
    <div className='trans h-[60px] md:h-[100px] mx-12 flex items-center justify-center'>
      <p className='text-lg md:text-2xl text-[rgb(254 252 232)] hover:text-yellow-200 hover:cursor-pointer'>{s}</p>
    </div>
  );
};

// Marquee component
const Mrq = () => {
  return (
    <Marquee gradient="true" gradientColor='#1fb1941a' autoFill="true" pauseOnHover="true" gradientWidth={500}>
      {skills.map((skill, index) => (
        <Skill key={index} s={skill} />
      ))}
    </Marquee>
  );
};

export default Mrq;
