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
import Careers from "./pages/Careers";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import AppointmentModal from "./components/AppointmentModal";
import { AppointmentProvider } from "./context/AppointmentContext";
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
    <AppointmentProvider>
      <BrowserRouter>
        <div className="app">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <AppointmentModal />
        </div>
      </BrowserRouter>
    </AppointmentProvider>
  );
}
