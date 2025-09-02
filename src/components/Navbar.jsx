import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">
          <img src="/Untuk Beranda/Vector.png" alt="Logo" />
        </span>
        <span className="chill">
          <strong>CHILL</strong>
        </span>
        <Link to="/series">Series</Link>
        <Link to="/film">Film</Link>
        <Link to="/daftar-saya">Daftar Saya</Link>
      </div>

      <div className="nav-right">
        <div className="profile-container">
          <label htmlFor="dropdown-toggle" className="profile-label">
            <img
              src="/Untuk Beranda/ikon masuk pengunjung.png"
              alt="User"
              className="profile-icon"
            />
            <span className="arrow">
              <img
                src="/Untuk Beranda/Vector (1).png"
                alt="arrow"
              />
            </span>
          </label>
          <input type="checkbox" id="dropdown-toggle" hidden />
          <div className="dropdown">
            <Link
              to="/profil-saya"
              className="profile-link"
              style={{ color: "blue" }}
            >
              <img
                src="/Untuk Beranda/profil saya.png"
                alt="Profil"
              />{" "}
              Profil Saya
            </Link>
            <Link to="/ubah-premium">
              <span className="white-star-1">&#9733;</span> Ubah Premium
            </Link>
            <a href="#" onClick={() => navigate("/")} className="logout-link">
              <span className="logout-icon">
                <img
                  src="/Untuk Beranda/login-variant.png"
                  alt="Logout"
                />
              </span>
              <span className="logout-text">Keluar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
