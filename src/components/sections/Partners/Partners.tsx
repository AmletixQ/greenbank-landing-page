import Partner1 from "assets/partners/upwork.svg";
import Partner2 from "assets/partners/petal.svg";
import Partner3 from "assets/partners/rakuten.svg";
import Partner4 from "assets/partners/nyt.svg";
import Partner5 from "assets/partners/vice.svg";
import Partner6 from "assets/partners/dell.svg";
import "./Partners.scss";

const Partners = () => {
  return (
    <section className="partners">
      <img src={Partner1} alt="Partner 1" />
      <img src={Partner2} alt="Partner 2" />
      <img src={Partner3} alt="Partner 3" />
      <img src={Partner4} alt="Partner 4" />
      <img src={Partner5} alt="Partner 5" />
      <img src={Partner6} alt="Partner 6" />
    </section>
  );
};

export default Partners;
