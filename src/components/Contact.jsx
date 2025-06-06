// src/components/Contact.jsx
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Contact() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Email: tbravos@usc.edu", "LinkedIn: theobravos", "GitHub: theobravos"],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="section-container">
      <h2>Let’s Connect</h2>
      <p>
        <span ref={typedRef} style={{ fontSize: "1.2rem", color: "#0070f3" }}></span>
      </p>
    </div>
  );
}