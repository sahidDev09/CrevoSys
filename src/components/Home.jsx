import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import Teams from "./Teams";
import Footer from "./footer";
import StartupCard from "./startupCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Teams />
      <StartupCard />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
