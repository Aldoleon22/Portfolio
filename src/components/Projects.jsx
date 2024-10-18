import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      <h2>Projets</h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>CarRent</h3>
        <p>Application web pour la location de voitures. Développée avec Laravel et React.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>GestResto</h3>
        <p>Plateforme de réservation d'hôtels avec Laravel et React. API REST pour la gestion des chambres et réservations.</p>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
