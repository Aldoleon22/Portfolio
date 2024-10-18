import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
    </div>
  );
}

export default App;
