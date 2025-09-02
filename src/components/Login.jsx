import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { findUser } from "../utils/storage";
import "../styles/auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = findUser(username, password);
    if (user) {
      localStorage.setItem("currentUser", username);
      navigate("/beranda"); // pindah ke halaman beranda
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div
      className="bg"
      id="register-body2"
      style={{
        backgroundImage: `url(/Untuk_Bg/latar_belakang.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main className="container">
        {/* header */}
        <div className="header">
          <img
            className="logo"
            src="/Untuk Halaman Login/Logo (1).png"
            alt="logo"
          />
          <div className="header-title">
            <h1>Masuk</h1>
            <p>Selamat datang kembali!</p>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="form-container">
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
              alt={showPassword ? "eye-on" : "eye-off"}
              onClick={togglePassword}
              style={{ cursor: "pointer", width: "24px", marginLeft: "8px" }}
            />
          </div>

          <div className="form-additional-info">
            <p>
              Belum punya akun?{" "}
              <Link id="register" to="/daftar">
                Daftar
              </Link>
            </p>
            <Link to="/pengaturan">Lupa kata sandi?</Link>
          </div>

          <div className="form-action">
            <button className="button" type="submit">
              Masuk
            </button>
            <p>Atau</p>
            <button type="button">
              <img
                id="google-icon"
                src="/Untuk Halaman Login/logo google.png"
                alt="google-icon"
              />
              Masuk dengan Google
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
