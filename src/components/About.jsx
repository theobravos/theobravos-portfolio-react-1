import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="about-content">
        <img
          src="/assets/img/headshot.jpg"
          alt="Theo Bravos"
          className="headshot"
        />
        <div className="about-text">
          <h1>Hi, I’m Theo Bravos</h1>
          <p>
            As a Master of Science in Business Analytics candidate at 
            the University of Southern California, I specialize in 
            financial data science, predictive modeling, and business 
            intelligence. …  
          </p>
          <a href="/assets/resume.pdf" className="btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}