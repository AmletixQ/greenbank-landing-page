import Frame from "assets/frames/frame-3.svg";
import "./Perfect.scss";
import Button from "components/Button/Button";

const Perfect = () => {
  return (
    <section className="perfect">
      <img src={Frame} alt="Frame 3" />
      <div>
        <h4>Find the Perfect Credit Card for You</h4>
        <p className="dark-text">
          Discover your ideal credit card with ease. Our comprehensive selection
          caters to every financial need and lifestyle. Whether you seek
          cashback rewards, travel perks, or building credit, we have the
          perfect credit card waiting for you. Unleash the possibilities and
          find the credit card that fits your unique goals and aspirations.
        </p>
        <Button intent={"filled"}>Learn more</Button>
      </div>
    </section>
  );
};

export default Perfect;
