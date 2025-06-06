// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Typed from "typed.js";
import { debounce } from "lodash";
import "./Hero.css"; // we’ll add styling next

export default function Hero() {
  const mountRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    // ====== THREE.JS SETUP ======
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Create particle cloud
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.04 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouseX = 0,
      mouseY = 0;
    const handleMouseMove = debounce((event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }, 10);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.002 + mouseY * 0.002;
      points.rotation.y += 0.003 + mouseX * 0.003;
      renderer.render(scene, camera);
    };
    animate();

    // ====== TYPED.JS SETUP ======
    const options = {
      strings: [
        "Hi, I'm Theo Bravos.",
        "Master’s candidate in Business Analytics.",
        "I build 3D data visualizations & interactive dashboards.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    // CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      typed.destroy();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="hero-container" ref={mountRef}>
      <div className="typed-overlay">
        <span ref={typedRef}></span>
      </div>
    </div>
  );
}