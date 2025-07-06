import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Proofs from '../components/Proofs';
import FAQ from '../components/FAQ';
import Stats from '../components/Stats';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <div id="about">
        <About />
      </div>
      <Portfolio />
      <Stats />
      <Proofs />
      <FAQ />
    </motion.div>
  );
};

export default Home; 