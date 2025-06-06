// src/components/Contact.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Contact.css"; // styling next

export default function Contact() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Email: tbravos@usc.edu",
        "LinkedIn: https://linkedin.com/in/theobravos",
        "GitHub: https://github.com/theobravos",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="section-container">
      <h2>Let’s Connect</h2>
      <p className="typed-contact">
        <span ref={typedRef}></span>
      </p>
    </div>
  );
}