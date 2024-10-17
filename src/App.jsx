import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Léon Aldo HERINIAINA. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
