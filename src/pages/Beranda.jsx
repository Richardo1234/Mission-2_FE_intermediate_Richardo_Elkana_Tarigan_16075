import React from "react";
import Navbar from "../components/Navbar";
import "../styles/navbar.css";
import HeroSection from "../components/HeroSection";
import ContinueWatching from "../components/ContinueWatching";
import Footer from "../components/Footer";
import TopRating from "../components/TopRating";
import FilmTrending from "../components/FilmTrending";
import RilisBaru from "../components/RilisBaru";

function Beranda() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContinueWatching />
      <TopRating />
      <FilmTrending />
      <RilisBaru />
      <Footer />
    </>
  );
}

export default Beranda;
