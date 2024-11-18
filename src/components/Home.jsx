import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-[#070707] to-[#221f35] h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
