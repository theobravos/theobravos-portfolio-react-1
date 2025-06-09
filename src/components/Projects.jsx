import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2>Selected Projects</h2>
      <div className="projects-grid">

        {/* Music Entertainment Analytics */}
        <div className="project-card">
          <img
            src="/assets/img/music-analytics.png"
            alt="Music Entertainment Analytics Dashboard"
            className="project-screenshot"
          />
          <div className="project-info">
            <h3>Music Entertainment Analytics</h3>
            <p>Performed end-to-end SQL analysis…</p>
            <a
              href="https://github.com/theobravos/music-entertainment-analytics"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>

        {/* Insurance Loss */}
        <div className="project-card">
          <img
            src="/assets/img/insurance-loss.png"
            alt="Predicting Loss Causes screenshot"
          />
          <div className="project-info">
            <h3>Predicting Loss Causes</h3>
            <p>Engineered 20+ features…</p>
            <a
              href="https://github.com/theobravos/insurance-loss"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>

        {/* Movie Ratings */}
        <div className="project-card">
          <img
            src="/assets/img/movie-analytics.png"
            alt="Movie Ratings Analysis screenshot"
            className="project-screenshot"
          />
          <div className="project-info">
            <h3>Movie Ratings Analysis</h3>
            <p>Explored and cleaned movie-rating data…</p>
            <a
              href="https://github.com/theobravos/movie-ratings-analysis"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Repo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}