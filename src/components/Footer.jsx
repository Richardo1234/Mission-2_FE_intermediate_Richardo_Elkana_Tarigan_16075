import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    // footer
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + hak cipta */}
        <div className="footer-logo">
          <img src="Untuk Beranda/Logo.png" alt="Chill Logo" />
          <p>©2023 Chill All Rights Reserved</p>
        </div>

        {/* Genre Toggle */}
        <div className="footer-section">
          <input type="checkbox" id="genre-toggle" hidden />
          <label htmlFor="genre-toggle" className="footer-toggle">
            Genre <span className="arrow">&gt;</span>
          </label>
          <ul className="collapsible">
            <li>Aksi</li>
            <li>Anak-anak</li>
            <li>Anime</li>
            <li>Britania</li>
            <li>Drama</li>
            <li>Fantasi Ilmiah & Fantasi</li>
            <li>Kejahatan</li>
            <li>KDrama</li>
            <li>Komedi</li>
            <li>Petualangan</li>
            <li>Perang</li>
            <li>Romantis</li>
            <li>Sains & Alam</li>
            <li>Thriller</li>
          </ul>
        </div>

        {/* Bantuan Toggle */}
        <div className="footer-section">
          <input type="checkbox" id="bantuan-toggle" hidden />
          <label htmlFor="bantuan-toggle" className="footer-toggle">
            Bantuan <span className="arrow">&gt;</span>
          </label>
          <ul className="collapsible">
            <div className="collapsible_2">
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
