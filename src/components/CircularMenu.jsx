import React, { useState } from 'react';
import './CircularMenu.scss';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const CircularMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const menuItems = [
    { name: 'Accueil', component: <About /> },
    { name: 'Projets', component: <Projects /> },
    { name: 'Compétences', component: <Skills /> },
    { name: 'À propos', component: <About /> },
    { name: 'Contact', component: <Contact /> },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="menu-container">
      <div className="circular-menu">
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${activeIndex === index ? 'active' : ''}`}
              style={{
                transform: `rotate(${index * (360 / menuItems.length)}deg) translate(150px) rotate(-${index * (360 / menuItems.length)}deg)`
              }}
              onClick={() => handleClick(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Le cercle supplémentaire à droite */}
      <div className="large-circle">
        {activeIndex !== null && (
          <div className="selected-route">
            {menuItems[activeIndex].component}
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularMenu;
