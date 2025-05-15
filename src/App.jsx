import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <div>
      <Navigation /> //nav
      <HeroSection />  //hero
    </div>
  );
};

export default App;
