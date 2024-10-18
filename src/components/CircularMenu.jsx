import React, { useState } from 'react';
import './CircularMenu.scss';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const CircularMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const menuItems = [
    { name: 'Accueil', route: 'Accueil', component: <About /> },
    { name: 'Projets', route: 'Projets', component: <Projects /> },
    { name: 'Compétences', route: 'Compétences', component: <Skills /> },
    { name: 'À propos', route: 'À propos', component: <About /> },
    { name: 'Contact', route: 'Contact', component: <Contact /> },
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
                transform: `rotate(${index * (360 / menuItems.length)}deg) translate(150px) rotate(-${index * (360 / menuItems.length)}deg)`,
              }}
              onClick={() => handleClick(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Cercle supplémentaire à droite */}
      <div className="large-circle">
        {activeIndex !== null && (
          <div className="selected-component-circle">
            <div className="circular-component">
              {menuItems[activeIndex].component}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularMenu;
