// src/App.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Wrap all sections in AnimatePresence for page-level transitions */}
      <AnimatePresence exitBeforeEnter>
        {/* Each section is a motion.div that can slide/fade */}
        <motion.section
          key="hero"
          id="hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
        </motion.section>

        <motion.section
          key="projects"
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          key="skills"
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          key="contact"
          id="contact"
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