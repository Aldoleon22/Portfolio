import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Léon Aldo HERINIAINA
      </motion.h1>
      <p>Développeur Web Full-Stack spécialisé en Laravel et React</p>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </motion.nav>
    </header>
  );
}

export default Header;
