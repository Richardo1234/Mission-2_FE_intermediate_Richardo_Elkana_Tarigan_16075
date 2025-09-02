// HeroSection.jsx
// lagi diperbaiki
import React from "react";
import "../styles/herosection.css";

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(/Untuk_Bg/gambar_latihan_militer_di_header.png)`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Duty After School</h1>
          <p className="multiline-ellipsis">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="hero-buttons">
            <button className="start-btn">Mulai</button>

            <span className="info-btn">
              <img src="/Untuk Beranda/tanda_seru.png" alt="Info Icon" />
              <span>Selengkapnya</span>
            </span>

            <span className="age-limit">18+</span>

            <img
              src="/Untuk Beranda/volume-off.png"
              alt="Volume Off"
              className="volume"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
