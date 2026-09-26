import { Link, useLocation } from "react-router-dom";
import daxinLogo from "../assets/images/daxin-logo.png";
import daxinLogoWhite from "../assets/images/daxin-logo-footer.png";
import "../styles/Footer.css";

const FOOTER_MENUS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Internship", to: "/internship" },
    ],
  },
  {
    title: "Contact",
    to: "/contact",
  },
  {
    title: "Products",
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
    <footer className="zoho-footer">
      <div className="zoho-footer__nav">
        <div className="zoho-footer__nav-inner">
          <Link to="/" className="zoho-footer__logo" aria-label="Daxin Homepage" onClick={handleLogoClick}>
            <img src={daxinLogo} alt="Daxin Technologies" />
          </Link>

          <nav className="zoho-footer__menus" aria-label="Footer">
            {FOOTER_MENUS.map((menu) =>
              menu.links ? (
                <div className="zoho-footer__menu" key={menu.title}>
                  <span className="zoho-footer__menu-title">{menu.title}</span>
                  <ul className="zoho-footer__menu-list">
                    {menu.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink to={link.to} external={link.external} className="zoho-footer__menu-link">
                          {link.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="zoho-footer__menu" key={menu.title}>
                  <FooterLink
                    to={menu.to}
                    external={menu.external}
                    className="zoho-footer__menu-title zoho-footer__menu-title--link"
                  >
                    {menu.title}
                  </FooterLink>
                </div>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="zoho-footer__bottom">
        <Link to="/" className="zoho-footer__bottom-logo" aria-label="Daxin Homepage" onClick={handleLogoClick}>
          <img src={daxinLogoWhite} alt="Daxin Technologies" />
        </Link>
        <p className="zoho-footer__copyright">
          © {currentYear}, Daxin Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
