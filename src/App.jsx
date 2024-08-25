import Branding from "./components/Branding";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import Packages from "./components/Packages";
import Questions from "./components/Questions";
import SecondPage from "./components/SecondPage";
import Services from "./components/Services";
import ThirdPage from "./components/ThirdPage";
import Work from "./components/Work";

function App() {
  return (
    <>
      <LandingPage />
      <SecondPage />
      <ThirdPage />
      <Services />
      <Work />
      <Packages />
      <Branding />
      <Questions />
      <Contact />
    </>
  );
}

export default App;
