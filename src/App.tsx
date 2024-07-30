import Heading from "components/sections/Heading/Heading";
import Header from "components/sections/Header/Header";
import Statistics from "components/sections/Statistics/Statistics";
import Partners from "components/sections/Partners/Partners";
import "./App.scss";
import Offer from "components/sections/Offer/Offer";
import Personalize from "components/sections/Personalize/Personalize";
import Perfect from "components/sections/Perfect/Perfect";
import Feedback from "components/sections/Feedback/Feedback";

const App = () => {
  return (
    <main>
      <Header />
      <Heading />
      <Statistics />
      <Partners />
      <Offer />
      <Personalize />
      <Perfect />
      <Feedback />
    </main>
  );
};

export default App;
