import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Industries from "./components/Industries";
import Story from "./components/Story";
import DigitalBackbone from "./components/DigitalBackbone";
import Principles from "./components/Principles";
import MadeInIndia from "./components/MadeInIndia";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import heroBackground from "./assets/images/hero-background.webp";
import "./App.css";

function Home() {
  return (
    <main>
      <div
        className="home-hero-wrap"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <Hero />
        <FeaturedProducts />
      </div>
      <Industries />
      <Story />
      <DigitalBackbone />
      <Principles />
      <MadeInIndia />
      <GetStarted />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
