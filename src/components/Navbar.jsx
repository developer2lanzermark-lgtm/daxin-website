import { Link, NavLink, useLocation } from "react-router-dom";
import daxinLogo from "../assets/images/daxin-logo.png";
import { NAV_LINKS } from "../config/navLinks";
import "../styles/Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={daxinLogo} alt="Daxin Technologies" />
        </Link>

        <nav className="navbar__menu" aria-label="Main">
          {NAV_LINKS.map((link) => {
            // Hidden links keep their slot (invisible) so the other menus do not move between pages.
            const ghost = link.hideOnHome && onHome;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                aria-hidden={ghost || undefined}
                tabIndex={ghost ? -1 : undefined}
                className={({ isActive }) =>
                  `btn-text navbar__link${isActive ? " navbar__link--active" : ""}${
                    ghost ? " navbar__link--ghost" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
