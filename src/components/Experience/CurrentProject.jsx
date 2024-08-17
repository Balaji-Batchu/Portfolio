import { motion } from 'framer-motion';
import React from 'react';

const projectsList = [
  {
    title: 'Prathidhi Naivedhya',
    imageSrc: '/prathidhi-naivedhya.PNG',
    link: 'https://github.com/Balaji-Batchu/Prathidhi_Naivedhya',
    live_link: 'https://prathidhi-naivedhya.netlify.app'
  },
  {
    title: 'A.I Summarizer',
    imageSrc: '/A.I_GEN.png',
    link: 'https://github.com/Balaji-Batchu/Summarizer.io',
    live_link: 'https://ai-summarizer.netlify.app'
  },
  {
    title: 'FoodApp',
    imageSrc: '/foodapp.png',
    link: 'https://github.com/Balaji-Batchu/FoodApp',
    live_link: 'https://foodapp.netlify.app'
  },
  {
    title: 'Tenzies Game',
    imageSrc: '/tenzies.PNG',
    link: 'https://github.com/Balaji-Batchu/Tenzies-Game',
    live_link: 'https://tenzies.netlify.app'
  },
];

export const Projects = () => {
  return (
    <section id="Projects" className="bg-[#03120fe5] text-yellow-50 min-h-screen relative">
      <div className="px-6 py-10">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <hr className="w-full border-t-2 border-yellow-200 opacity-50" />
            </div>
            <h2 className="text-4xl md:text-5xl bg-[#03120ff2] text-yellow-200 font-bold px-2 pb-4 relative z-10">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white my-8">
            {projectsList.map((project, index) => (
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px #ebeae0ed' }}
                transition={{ duration: 0.3 }}
                className="bg-[rgba(165,162,129,0.1)] rounded-lg shadow-lg outline outline-offset-1 mb-6 mx-2 
                outline-[#ebeae0ed] overflow-hidden"
                key={index}
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 rounded-t-lg object-contain transition-transform duration-300"
                  src={project.imageSrc}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-emerald-400">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-2 text-[#e1e6b5] hover:underline transition-colors duration-300"
                  >
                    <span className='text-yellow-300'>Repo:</span> {project.link}
                  </a>
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#e1e6b5] hover:underline transition-colors duration-300"
                  >
                    <span className='text-yellow-300'>Live:</span> {project.live_link}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
