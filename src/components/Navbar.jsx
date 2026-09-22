import daxinLogo from "../assets/images/daxin-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          <img src={daxinLogo} alt="Daxin Technologies" />
        </a>
      </div>
    </header>
  );
}
