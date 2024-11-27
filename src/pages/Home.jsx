import GetTouch from "@/components/getTouch";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SkiilsMaarque from "@/components/SkiilsMaarque";
import StartupCard from "@/components/StartupCard";
import Teams from "@/components/Teams";

const Home = () => {
  return (
    <div>
      <Hero />
      <Teams />
      <SkiilsMaarque />
      <StartupCard />
      <Services />
      <GetTouch />
    </div>
  );
};

export default Home;
