// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Skills.css"; // add styling next

const SKILLS = [
  "Python",
  "SQL",
  "Tableau",
  "XGBoost",
  "React",
  "Three.js",
  "GSAP",
  "Framer Motion",
];

export default function Skills() {
  return (
    <div className="section-container">
      <h2>Skills & Tools</h2>
      <ul className="skills-list">
        {SKILLS.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}