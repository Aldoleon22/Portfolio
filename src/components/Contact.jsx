import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact</h2>
      <p>Email : <a href="mailto:leonaldo2608@gmail.com">leonaldo2608@gmail.com</a></p>
      <p>GitHub : <a href="https://github.com/Aldoleon22" target="_blank" rel="noopener noreferrer">Aldoleon22</a></p>
      <p>LinkedIn : <a href="https://www.linkedin.com/in/AldoL%C3%A9on" target="_blank" rel="noopener noreferrer">Aldo Léon</a></p>
    </motion.section>
  );
}

export default Contact;
