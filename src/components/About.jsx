import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }} // Position initiale
      animate={{ opacity: 1, y: 0 }} // Position finale
      transition={{ duration: 0.5 }} // Durée de l'animation
    >
      <h2>À propos</h2>
      <p>Je suis un développeur web passionné par l'innovation technologique...</p>
    </motion.section>
  );
}

export default About;
