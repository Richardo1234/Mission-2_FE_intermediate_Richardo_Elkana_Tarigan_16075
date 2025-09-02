import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/storage";
import "../styles/auth.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // cegah reload
    if (password !== confirmPassword) {
      alert("Password tidak sama!");
      return;
    }
    const success = addUser(username, password);
    if (!success) {
      alert("Username sudah ada!");
      return;
    }
    alert("Akun berhasil dibuat!");
    navigate("/"); // pindah ke halaman login
  };

  return (
    <div
      className="body"
      id="register-body"
      style={{
        backgroundImage: `url(/Untuk_Bg/latar_belalakng_daftar.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <main className="container">
        {/* Header */}
        <div className="header">
          <img
            className="logo"
            src="/Untuk Halaman Login/Logo (1).png"
            alt="logo"
          />
          <div className="header-title">
            <h1>Daftar</h1>
            <p>Selamat datang</p>
          </div>
        </div>

        {/* Form */}
        <form className="form-container" onSubmit={handleRegister}>
          {/* Username */}
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-input">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={
                showPassword
                  ? "/Untuk Halaman Login/mata terbuka.png"
                  : "/Untuk Halaman Login/eye-off.jpg"
              }
              alt="toggle-eye"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-input" id="confirmation-password">
            <label htmlFor="password-confirmation">Konfirmasi Kata Sandi</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="password-confirmation"
              id="password-confirmation"
              placeholder="Masukkan kata sandi"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <img
              src={
                showConfirmPassword
                  ? "/Untuk Halaman Login/mata terbuka.png"
                  : "/Untuk Halaman Login/eye-off.jpg"
              }
              alt="toggle-eye"
              style={{ cursor: "pointer" }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          {/* Info tambahan */}
          <div className="form-additional-info">
            <p>
              Sudah punya akun?{" "}
              <Link id="register" to="/">
                Masuk
              </Link>
            </p>
          </div>

          {/* Action */}
          <div className="form-action">
            <button className="button" type="submit">
              Daftar
            </button>
            <p>Atau</p>
            <button type="button">
              <img
                id="google-icon"
                src="/Untuk Halaman Login/logo google.png"
                alt="google-icon"
              />
              Daftar dengan Google
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
