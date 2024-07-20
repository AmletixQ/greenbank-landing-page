import Security from "assets/icons/security.svg";
import Pie from "assets/icons/pie.svg";
import Analytics from "assets/icons/analytics.svg";
import "./Offer.scss";

const blocks = [
  {
    icon: Security,
    name: "Security Guarantee",
    description: "Your data and funds will be securely protected.",
  },
  {
    icon: Pie,
    name: "Investing",
    description: "Your data and funds will be securely protected.",
  },
  {
    icon: Analytics,
    name: "Multiple Method",
    description: "Your data and funds will be securely protected.",
  },
];

const Offer = () => {
  return (
    <section className="offer">
      <h4>What do we offer?</h4>
      <div className="container">
        {blocks.map(({ icon, name, description }) => (
          <div className="block">
            <div className="icon-container">
              <img src={icon} alt={name} />
            </div>
            <div className="info-container">
              <h6>{name}</h6>
              <p className="dark-text">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
