import Navbar from "components/Navbar/Navbar";
import Logo from "components/Logo/LogoIcon";
import "./Header.scss";
import Button from "components/Button/Button";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <Button intent={"transparent"}>Contact</Button>
    </header>
  );
};

export default Header;
