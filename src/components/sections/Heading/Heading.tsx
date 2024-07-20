import Frame from "assets/frames/frame-1.svg";
import Arrow from "assets/icons/arrow.svg";
import Button from "components/Button/Button";
import User1 from "assets/icons/Ellipse-1.svg";
import User2 from "assets/icons/Ellipse-2.svg";
import User3 from "assets/icons/Ellipse-3.svg";
import "./Heading.scss";

const Heading = () => {
  return (
    <section className="heading">
      <div className="content-container">
        <h2>Discover the Perfect Credit Card for You</h2>
        <p className="dark-text">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>
        <Button intent={"filled"} className="heading-button">
          Get Started
          <img src={Arrow} alt="Arrow" />
        </Button>
        <div className="active-users">
          <div className="users">
            <img src={User1} alt="User 1" />
            <img src={User2} alt="User 2" />
            <img src={User3} alt="User 3" />
          </div>
          <div className="info">
            <h6 className="average-text">10.2k+</h6>
            <p className="dark-text">Active users around the wordls</p>
          </div>
        </div>
      </div>
      <img src={Frame} alt="Frame 1" />
    </section>
  );
};

export default Heading;
