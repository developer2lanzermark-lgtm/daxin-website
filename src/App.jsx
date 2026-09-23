import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Industries from "./components/Industries";
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
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
