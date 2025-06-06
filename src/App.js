// src/App.js
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./index.css"; // global CSS

function App() {
  return (
    <div className="App">
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <motion.section
          id="hero"
          key="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.section>

        <motion.section
          id="projects"
          key="projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="skills"
          key="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="contact"
          key="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

export default App;