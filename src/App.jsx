import React from 'react';
import Header from './components/Header';

import CircularMenu from './components/CircularMenu';
import './App.css';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <CircularMenu /> {/* Ajout du menu circulaire ici */}
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
