import { Link, useLocation } from "react-router-dom";
import daxinLogoWhite from "../assets/images/daxin-logo-footer.png";
import "../styles/Footer.css";

const FOOTER_MENUS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers & Internship", to: "/careers" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Contact",
    to: "/contact",
  },
  {
    title: "Products",
    to: "/products",
    links: [
      { label: "gPro", to: "https://gprosoftware.com/", external: true },
      { label: "Demander", to: "https://seller.demander.app/aptadmin/seller/app/login", external: true },
      { label: "Voice Bill", to: "/products#voicebill" },
    ],
  },
];

// Clicking a footer link to the page you're already on doesn't trigger a
// route change, so the app-wide ScrollToTop (which only runs on pathname
// change) never fires. This scrolls to the top by hand in that one case,
// and leaves everything else (other pages, and #section links) alone.
function useSamePageScrollToTop(to) {
  const { pathname } = useLocation();
  return () => {
    if (!to.includes("#") && to === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
}

function FooterLink({ to, external, className, children }) {
  const handleClick = useSamePageScrollToTop(to);

  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const handleLogoClick = useSamePageScrollToTop("/");

  return (
    <footer className="site-footer">
      <div className="site-footer__nav">
        <div className="site-footer__nav-inner">
          <nav className="site-footer__menus" aria-label="Footer">
            {FOOTER_MENUS.map((menu) =>
              menu.links ? (
                <div className="site-footer__menu" key={menu.title}>
                  {menu.to ? (
                    <FooterLink to={menu.to} className="site-footer__menu-title site-footer__menu-title--link">
                      {menu.title}
                    </FooterLink>
                  ) : (
                    <span className="site-footer__menu-title">{menu.title}</span>
                  )}
                  <ul className="site-footer__menu-list">
                    {menu.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink to={link.to} external={link.external} className="site-footer__menu-link">
                          {link.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="site-footer__menu" key={menu.title}>
                  <FooterLink
                    to={menu.to}
                    external={menu.external}
                    className="site-footer__menu-title site-footer__menu-title--link"
                  >
                    {menu.title}
                  </FooterLink>
                </div>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="site-footer__bottom">
        <Link to="/" className="site-footer__bottom-logo" aria-label="Daxin Homepage" onClick={handleLogoClick}>
          <img src={daxinLogoWhite} alt="Daxin Technologies" />
        </Link>
        <p className="site-footer__copyright">
          © {currentYear}, Daxin Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
