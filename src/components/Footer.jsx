import { Link, useLocation } from "react-router-dom";
import daxinLogoWhite from "../assets/images/daxin-logo-footer.png";
import "../styles/Footer.css";

const FOOTER_MENUS = [
  {
    title: "Products",
    to: "/products",
    links: [
      { label: "gPro", to: "https://gprosoftware.com/", external: true },
      { label: "Demander", to: "https://seller.demander.app/aptadmin/seller/app/login", external: true },
      { label: "Voice Bill", to: "/products#voicebill" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers & Internship", to: "/careers" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Location",
    details: [
      {
        lines: [
          "Plot No.743, 2nd Floor",
          "Rahmathnagar 3rd Street,",
          "Near Income Tax Office",
          "Tiruchendur Road, Palayamkottai",
          "Tirunelveli, Tamilnadu",
          "India - 627011",
        ],
      },
    ],
  },
  {
    title: "Contact Sales",
    to: "/contact",
    details: [
      { label: "Phone", lines: ["+91 90-470-2929-8"] },
      {
        label: "Email",
        lines: ["sales@daxintechnologies.com"],
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=sales@daxintechnologies.com",
        external: true,
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path fill="currentColor" d="M18.2 2.3h3.4l-7.4 8.5L23 21.7h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2.3h7l4.8 6.4 5.4-6.4zm-1.2 17.4h1.9L7.1 4.2H5.1l11.9 15.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/daxintechnologies/",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#1877F2" />
        <path fill="#fff" d="M13.3 19v-5.6h1.9l.3-2.2h-2.2V9.8c0-.6.2-1.1 1.1-1.1h1.2V6.7c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 3v1.7H9.2v2.2h1.9V19h2.2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 28 20" width="34" height="24" aria-hidden="true">
        <rect width="28" height="20" rx="5" fill="#FF0000" />
        <path fill="#fff" d="M11.2 5.8v8.4L18.4 10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#0A66C2" />
        <path fill="#fff" d="M4.5 9.2h3v9.8h-3zM6 4.5a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4zm3.4 4.7h2.9v1.3c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.4h-3v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <defs>
          <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FDC830" />
            <stop offset="0.5" stopColor="#F3414A" />
            <stop offset="1" stopColor="#B833B8" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="url(#ig-grad)" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="4.4" fill="none" stroke="url(#ig-grad)" strokeWidth="2.2" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="#F3414A" />
      </svg>
    ),
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
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
                  {menu.to ? (
                    <FooterLink
                      to={menu.to}
                      external={menu.external}
                      className="site-footer__menu-title site-footer__menu-title--link"
                    >
                      {menu.title}
                    </FooterLink>
                  ) : (
                    <span className="site-footer__menu-title">{menu.title}</span>
                  )}
                  {menu.details && (
                    <div className="site-footer__details">
                      {menu.details.map((item) => (
                        <div className="site-footer__detail" key={item.label || item.lines[0]}>
                          {item.label && (
                            <strong className="site-footer__detail-label">{item.label}</strong>
                          )}
                          {item.lines.map((line) =>
                            item.href ? (
                              <a
                                key={line}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="site-footer__detail-text"
                              >
                                {line}
                              </a>
                            ) : (
                              <span key={line} className="site-footer__detail-text">
                                {line}
                              </span>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="site-footer__legal">
        <ul className="site-footer__social" aria-label="Social media">
          {SOCIAL_LINKS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="site-footer__social-link">
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
        <nav className="site-footer__legal-links" aria-label="Legal">
          {LEGAL_LINKS.map((l, i) => (
            <span key={l.label} className="site-footer__legal-item">
              <Link to={l.to}>{l.label}</Link>
              {i < LEGAL_LINKS.length - 1 && <span className="site-footer__legal-sep">|</span>}
            </span>
          ))}
        </nav>
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
