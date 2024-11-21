import Hero from "./Hero";
import Navbar from "./Navbar";
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
      <hr className=" my-10 border-gray-600" />
      <Footer />
    </div>
  );
};

export default Home;
