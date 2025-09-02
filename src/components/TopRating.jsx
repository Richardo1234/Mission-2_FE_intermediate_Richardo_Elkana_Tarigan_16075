import React, { useRef } from "react";
import "../styles/continuewatching.css";

function TopRating() {
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
      <h2 className="section-title">Top Rating Film dan Series Hari ini</h2>
      <div className="rating-slider-container">
        {/* Panah Kiri */}
        <button className="slider-arrow left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="rating-slider-track" ref={sliderRef}>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/Suzume.png"
              alt="Film 1"
            />
            <div className="episode-baru">Episode Baru</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/jurassic world.png"
              alt="Film 2"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/Sonic.png"
              alt="Film 3"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/All of us are death.png"
              alt="Film 4"
            />
            <div className="episode-baru">Episode Baru</div>
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/big hero 6.png"
              alt="Film 5"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/alice.png"
              alt="Film 6"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/batman.png"
              alt="Film 7"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/megan.png"
              alt="Film 8"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/doctor stranger.png"
              alt="Film 9"
            />
          </div>
          <div className="rating-card">
            <img
              src="Untuk Beranda/top_rating & series_hari_ini/my hero academy.png"
              alt="Film 10"
            />
          </div>
        </div>

        {/* Panah Kanan */}
        <button className="slider-arrow right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default TopRating;
