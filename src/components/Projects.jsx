// src/components/Projects.jsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import "./Projects.css"; // we’ll add basic styling

const PROJECTS = [
  {
    title: "Predicting Loss Causes",
    description: "Engineered 20+ features and built XGBoost models on insurance data.",
    image: "/images/predicting-loss-causes.png",
    repo: "https://github.com/theobravos/insurance-loss",
  },
  {
    title: "Music Entertainment Analytics",
    description: "End-to-end SQL analysis & Tableau dashboards for entertainment data.",
    image: "/images/music-entertainment-analytics.png",
    repo: "https://github.com/theobravos/music-entertainment-analytics",
  },
  {
    title: "Movie Ratings Analysis",
    description: "Regression modeling to predict movie ratings in Jupyter.",
    image: "/images/movie-analytics.png",
    repo: "https://github.com/theobravos/movie-ratings-analysis",
  },
];

export default function Projects() {
  const mountRef = useRef(null);
  const [isWebGL, setIsWebGL] = useState(true);

  useEffect(() => {
    // Test for WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) throw new Error();
    } catch {
      setIsWebGL(false);
      return;
    }

    // ==== THREE.JS CAROUSEL ====
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const radius = 3;
    const angleStep = (2 * Math.PI) / PROJECTS.length;
    const group = new THREE.Group();

    PROJECTS.forEach((proj, i) => {
      const texture = new THREE.TextureLoader().load(proj.image);
      const mat = new THREE.MeshBasicMaterial({ map: texture });
      const geo = new THREE.PlaneGeometry(1.5, 1);
      const mesh = new THREE.Mesh(geo, mat);

      const angle = i * angleStep;
      mesh.position.x = radius * Math.cos(angle);
      mesh.position.z = radius * Math.sin(angle);
      mesh.lookAt(0, 0, 0);

      group.add(mesh);
    });

    scene.add(group);

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  if (!isWebGL) {
    return (
      <div className="projects-fallback">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <motion.div
              className="project-card"
              key={proj.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={proj.image} alt={proj.title} />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-container" ref={mountRef}></div>
  );
}