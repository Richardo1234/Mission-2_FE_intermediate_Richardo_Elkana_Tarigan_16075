import React, { useRef } from "react";
import "../styles/continuewatching.css";

function ContinueWatching() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="continue-watching">
      <h2>Melanjutkan Tonton Film</h2>
      <div className="slider">
        {/* Panah kiri */}
        <span className="slider-arrow left-1" onClick={scrollLeft}>
          &#10094;
        </span>

        <div className="arrow-1" ref={sliderRef}>
          <div className="slide-track">
            {/* Gambar 1 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/don't look up.png"
                alt="Don't Look Up"
              />
              <div className="info">
                <span>Don't Look Up</span>
                <span className="white-star">&#9733; 4.5/5</span>
              </div>
            </div>

            {/* Gambar 2 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/The batman.png"
                alt="Movie 2"
              />
              <div className="info">
                <span>All Of Us Are Death</span>
                <span className="white-star">&#9733; 4.2/5</span>
              </div>
            </div>

            {/* Gambar 3 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/blue lock.png"
                alt="Movie 3"
              />
              <div className="episode-baru-2">Episode Baru</div>
              <div className="info">
                <span>Blue Lock</span>
                <span className="white-star">&#9733; 4.6/5</span>
              </div>
            </div>

            {/* Gambar 4 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/A man called otto.png"
                alt="Movie 4"
              />
              <div className="info">
                <span>A Man Called Otto</span>
                <span className="white-star">&#9733; 4.4/5</span>
              </div>
            </div>

            {/* Gambar 5 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/shazam.png"
                alt="Movie 5"
              />
              <div className="info">
                <span>Shazam</span>
                <span className="white-star">&#9733; 4.4/5</span>
              </div>
            </div>

            {/* Gambar 6 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/avatar.png"
                alt="Movie 6"
              />
              <div className="info">
                <span>Avatar</span>
                <span className="white-star">&#9733; 4.4/5</span>
              </div>
            </div>

            {/* Gambar 7 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/drama korea.png"
                alt="Movie 7"
              />
              <div className="info">
                <span>KDrama</span>
                <span className="white-star">&#9733; 4.4/5</span>
              </div>
            </div>

            {/* Gambar 8 */}
            <div className="slide">
              <img
                src="Untuk Beranda/melanjutkan_tonton_film/fast x.png"
                alt="Movie 8"
              />
              <div className="info">
                <span>Fast X</span>
                <span className="white-star">&#9733; 4.4/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panah kanan */}
        <span className="slider-arrow right-1" onClick={scrollRight}>
          &#10095;
        </span>
      </div>
    </section>
  );
}


export default ContinueWatching;
