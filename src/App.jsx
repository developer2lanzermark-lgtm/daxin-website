import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
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
import About from "./pages/About";
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
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
