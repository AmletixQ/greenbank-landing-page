import LogoIcon from "assets/icons/logo-icon.svg";
import "./LogoIcon.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoIcon} alt="Logo" />
      <h6 className="bold average-text">GreenBank</h6>
    </div>
  );
};

export default Logo;
