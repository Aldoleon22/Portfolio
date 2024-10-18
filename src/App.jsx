import React from 'react';
import Header from './components/Header';
import AAA from './components/AAA'

import CircularMenu from './components/CircularMenu';
import './App.css';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <AAA /> {/* Ajout du menu circulaire ici */}
      {/* <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main> */}
    </div>
  );
}

export default App;
