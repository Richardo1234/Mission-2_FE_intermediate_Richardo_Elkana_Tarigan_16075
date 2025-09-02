import React, { useRef } from "react";
import "../styles/continuewatching.css";

function RilisBaru() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="top-rating-section">
      <h2 className="section-title">Rilis Baru</h2>
      <div className="rating-slider-container">
        {/* Panah kiri */}
        <button className="slider-arrow left" onClick={scrollLeft}>
          &#10094;
        </button>

        {/* Track slider */}
        <div className="rating-slider-track" ref={sliderRef}>
          <div className="rating-card">
            <img src="Untuk Beranda/film_trending/little mermaid.png" alt="Film 1" />
            <div className="top-10-badge">Top 10</div>
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/rilis_baru/duty after school.png" alt="Film 2" />
            <div className="episode-baru">Episode Baru</div>
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/top_rating & series_hari_ini/big hero 6.png" alt="Film 3" />
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/top_rating & series_hari_ini/All of us are death.png" alt="Film 4" />
            <div className="episode-baru">Episode Baru</div>
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/rilis_baru/missing.png" alt="Film 5" />
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/rilis_baru/happiness.png" alt="Film 6" />
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/rilis_baru/rio.png" alt="Film 7" />
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/melanjutkan_tonton_film/shazam.png" alt="Film 8" />
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/rilis_baru/baymaz.png" alt="Film 9" />
          </div>
          <div className="rating-card">
            <img src="Untuk Beranda/rilis_baru/spiderman.png" alt="Film 10" />
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

export default RilisBaru;
