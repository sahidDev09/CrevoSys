import Hero from "../components/Hero";

import Services from "../components/Services";
import Teams from "../components/Teams";

import StartupCard from "../components/startupCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <Teams />
      <StartupCard />
      <Services />
    </div>
  );
};

export default Home;
