import Logo from "components/Logo/LogoIcon";
import FooterLinks from "./FooterLinks/FooterLinks";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Logo />
          <p className="dark-text">
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>
        <FooterLinks />
      </div>
      <div className="policy-container">
        <p className="dark-text">
          copyright 2023 DoraDesign All Rights Reserved
        </p>
        <p className="dark-text">
          This page uses cookies. See cookies details{" "}
          <a className="dark-text" href="#">
            here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
