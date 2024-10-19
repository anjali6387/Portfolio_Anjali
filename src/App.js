import React from 'react';
import Navbar from '../src/Components/Navbar';
import Hero from '../src/Components/Hero';
import Skill from '../src/Components/Skill';
import About from '../src/Components/About';
import Contact from '../src/Components/Contact';
import Footer from '../src/Components/Footer';
import Project from './Components/Project';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
