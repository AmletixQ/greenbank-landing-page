import Frame from "assets/frames/frame-4.svg";
import Apple from "assets/badges/App_Store.svg";
import Google from "assets/badges/Google_Play.svg";
import "./Manage.scss";

const Manage = () => {
  return (
    <section className="manage">
      <div className="container">
        <div className="content">
          <h2>Easy Way to manage your finances</h2>
          <p className="dark-text">
            Easy to use mobile app that support on android and ios.
          </p>
        </div>
        <div className="badges">
          <a href="#">
            <img src={Apple} alt="App Store" />
          </a>
          <a href="#">
            <img src={Google} alt="Google Play" />
          </a>
        </div>
      </div>
      <img src={Frame} alt="Frame 4" />
    </section>
  );
};

export default Manage;
