import Frame from "assets/frames/frame-2.svg";
import Arrow from "assets/icons/arrow.svg";
import Button from "components/Button/Button";
import "./Personalize.scss";

const Personalize = () => {
  return (
    <section className="personalize">
      <div>
        <h4>Design your personalized credit card.</h4>
        <p className="dark-text">
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary
        </p>
        <Button intent={"filled"}>
          Create New Card
          <img src={Arrow} alt="Arrow" />
        </Button>
      </div>
      <img src={Frame} alt="Frame 2" />
    </section>
  );
};

export default Personalize;
