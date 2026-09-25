import { Link, NavLink } from "react-router-dom";
import daxinLogo from "../assets/images/daxin-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={daxinLogo} alt="Daxin Technologies" />
        </Link>

        <nav className="navbar__menu" aria-label="Main">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `btn-text navbar__link${
                isActive ? " navbar__link--active" : ""
              }`
            }
          >
            Products
          </NavLink>
        </nav>
      </div>
    </header>
  );
}