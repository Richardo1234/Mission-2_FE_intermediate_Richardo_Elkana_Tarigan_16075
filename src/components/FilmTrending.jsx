import React, { useRef } from "react";
import "../styles/continuewatching.css";

function FilmTrending() {
  const sliderRef = useRef(null);

  // Fungsi scroll ke kiri
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Fungsi scroll ke kanan
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="top-rating-section">
      <h2 className="section-title">Film Tranding</h2>
      <div className="rating-slider-container">
        {/* Panah kiri */}
        <button className="slider-arrow left" onClick={scrollLeft}>
          &#10094;
        </button>

        {/* Track film */}
        <div className="rating-slider-track" ref={sliderRef}>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/the tomorrow war.png"
              alt="Film 1"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/quantumania.png"
              alt="Film 2"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/guardian galaxy.png"
              alt="Film 3"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/melanjutkan_tonton_film/A man called otto.png"
              alt="Film 4"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/little mermaid.png"
              alt="Film 5"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/black adam.png"
              alt="Film 6"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/devil all the time.png"
              alt="Film 7"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/dilan1991.png"
              alt="Film 8"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/stuart little.png"
              alt="Film 9"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/film_trending/ted lasso.png"
              alt="Film 10"
            />
            <div className="top-10-badge">Top 10</div>
          </div>
        </div>

        {/* Panah kanan */}
        <button className="slider-arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default FilmTrending;
