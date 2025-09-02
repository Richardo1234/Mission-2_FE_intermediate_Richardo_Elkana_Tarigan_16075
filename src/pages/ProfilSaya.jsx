import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword, deleteUser } from "../utils/storage";
import "../styles/auth.css";

function ProfilSaya() {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    navigate("/");
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const success = updatePassword(currentUser, newPassword);
    if (success) {
      alert("Password berhasil diubah!");
      setNewPassword("");
    } else {
      alert("Gagal mengubah password!");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Yakin ingin hapus akun?")) {
      deleteUser(currentUser);
      localStorage.removeItem("currentUser");
      alert("Akun dihapus!");
      navigate("/");
    }
  };

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(/Untuk Halaman Login/latar_belakang.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Tombol kembali ke beranda */}
      <button
        onClick={() => navigate("/beranda")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "green",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Kembali ke Beranda
      </button>

      <main className="container">
        <div className="header">
          <h1>Pengaturan Akun</h1>
          <p>Ubah password atau hapus akun</p>
        </div>

        <form onSubmit={handleUpdate} className="form-container">
          <div className="form-input">
            <label>Password Baru</label>
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Masukkan password baru"
              required
            />
            <img
              src={
                showPassword
                  ? "/Untuk Halaman Login/mata terbuka.png"
                  : "/Untuk Halaman Login/eye-off.jpg"
              }
              alt="toggle-eye"
              style={{ cursor: "pointer", marginLeft: "8px", width: "24px" }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button className="button" type="submit">
            Ubah Password
          </button>
        </form>

        <hr style={{ margin: "20px 0" }} />

        <button
          className="button"
          style={{ backgroundColor: "red" }}
          onClick={handleDelete}
        >
          Hapus Akun
        </button>
      </main>
    </div>
  );
}

export default ProfilSaya;
