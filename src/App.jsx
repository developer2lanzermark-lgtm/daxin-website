import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import heroBackground from "./assets/images/hero-background.webp";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div
          className="home-hero-wrap"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <Hero />
          <FeaturedProducts />
        </div>
      </main>
    </div>
  );
}
