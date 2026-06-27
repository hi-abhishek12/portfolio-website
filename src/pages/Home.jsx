import React from 'react';
import Navbar from '../components/ Navbar';


import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold text-gray-800 text-center mt-16 mb-4"
        >
          Hi, I'm <span className="text-blue-600">Abhishek kumar</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-600 text-center mb-8 max-w-2xl"
        >
          A passionate <span className="font-semibold text-blue-500">Web Developer</span> crafting modern, responsive, and interactive web experiences.
        </motion.p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200"
        >
          View Projects
        </motion.a>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
          className="mt-16 flex gap-6"
        >
          <motion.img
            src="https://skillicons.dev/icons?i=react,js,tailwind,html,css,git,nodejs,nextjs"
            alt="Skills"
            className="h-12 drop-shadow-lg"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>
      </main>
    </>
  );
}

export default Home;