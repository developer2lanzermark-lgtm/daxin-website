import { Link } from "react-router-dom";
import daxinLogo from "../assets/images/daxin-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={daxinLogo} alt="Daxin Technologies" />
        </Link>
      </div>
    </header>
  );
}
