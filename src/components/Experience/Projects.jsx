import { motion } from 'framer-motion';
import React from 'react';
import Headings from '../Headings';

const projectsList = [
  {
    title: 'Prathidhi Naivedhya',
    imageSrc: '/prathidhi-naivedhya.PNG',
    description: 'An mission to support underprivileged and orphaned children through food donations. Empowered users with the ability to contribute food items, creating a direct impact on improving the lives of these children.',
    live_link: 'https://prathidhi-naivedhya.netlify.app'
  },
  {
    title: 'AI Summarizer',
    imageSrc: '/A.I_GEN.png',
    description: 'An AI-driven tool to summarize long articles and texts efficiently. Utilizes machine learning models for concise summaries.',
    live_link: 'https://ai-summarizer.netlify.app'
  },
  {
    title: 'Tenzies Game',
    imageSrc: '/tenzies.PNG',
    description: 'A fun and addictive dice game where you try to get all dice to show the same number. Created with React for interactive gameplay.',
    live_link: 'https://tenzies.netlify.app'
  }
];

export const Projects = () => {
  const handleCardClick = (liveLink) => {
    window.open(liveLink, '_blank');
  };

  return (
    <section id="Projects" className="bg-[#020d0be5] text-yellow-50 min-h-screen relative">
      <div className="px-6 py-10">
        <div className="container mx-auto">
          <Headings name={"Projects"} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {projectsList.map((project, index) => (
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 25px #c9c7baed' }}
                transition={{ duration: 0.3 }}
                className="bg-[#071d18b8] rounded-lg shadow-lg outline outline-offset-1 mb-6 mx-2 outline-[#ebeae0ed] overflow-hidden cursor-pointer"
                key={index}
                onClick={() => handleCardClick(project.live_link)}
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 rounded-t-lg object-contain transition-transform duration-300"
                  src={project.imageSrc}
                  alt={project.title}
                />
                <div className="px-6">
                  <h3 className="text-2xl font-semibold mb-3 text-emerald-400">{project.title}</h3>
                  <p className="text-[#e1e6b5] mb-4">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
