import daxinLogoWhite from "../assets/images/daxin-logo-footer.png";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="zoho-footer">
      <div className="zoho-footer__container">
        <a href="/" className="zoho-footer__logo" aria-label="Daxin Homepage">
          <img src={daxinLogoWhite} alt="Daxin Technologies" />
        </a>
        <p className="zoho-footer__copyright">
          © {currentYear}, Daxin Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
