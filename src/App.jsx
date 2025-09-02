import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Daftar from "./pages/Daftar";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import DaftarSaya from "./pages/DaftarSaya";
import Film from "./pages/Film";
import Series from "./pages/Series";
import ProfilSaya from "./pages/ProfilSaya";
import UbahPremium from "./pages/UbahPremium";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/daftar-saya" element={<DaftarSaya />} />
        <Route path="/film" element={<Film />} />
        <Route path="/series" element={<Series />} />
        <Route path="/profil-saya" element={<ProfilSaya />} />
        <Route path="/ubah-premium" element={<UbahPremium />} />
      </Routes>
    </Router>
  );
}

export default App;
