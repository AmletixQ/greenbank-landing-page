import Heading from "components/sections/Heading/Heading";
import Header from "components/sections/Header/Header";
import Statistics from "components/sections/Statistics/Statistics";
import Partners from "components/sections/Partners/Partners";
import "./App.scss";

const App = () => {
  return (
    <main>
      <Header />
      <Heading />
      <Statistics />
      <Partners />
    </main>
  );
};

export default App;
