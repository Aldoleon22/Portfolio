import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,  // L'animation se déclenche quand 20% de la section sont visibles
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2>À propos</h2>
      <p>
        Je suis un développeur web passionné par l'innovation technologique et la création d'expériences numériques. Avec une solide expérience dans le développement front-end et back-end, je m'efforce de concevoir des solutions web qui dépassent les attentes des utilisateurs.
      </p>
    </motion.section>
  );
}

export default About;
