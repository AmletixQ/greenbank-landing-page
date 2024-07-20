import Heading from "components/sections/Heading/Heading";
import Header from "components/sections/Header/Header";
import Statistics from "components/sections/Statistics/Statistics";
import Partners from "components/sections/Partners/Partners";
import "./App.scss";
import Offer from "components/sections/Offer/Offer";

const App = () => {
  return (
    <main>
      <Header />
      <Heading />
      <Statistics />
      <Partners />
      <Offer />
    </main>
  );
};

export default App;
