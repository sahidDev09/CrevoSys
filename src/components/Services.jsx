import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="relative overflow-hidden services min-h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('/servicebg.png')] ">
      <h1 className="text-center py-14 md:text-5xl text-3xl text-white">
        Services Web Provide
      </h1>
      <div className="container mx-auto grid md:grid-cols-4 md:gap-7 gap-5 px-4 md:px-0 mb-10 md:mb-0">
        {service.map((serviceCard, index) => (
          <div
            key={index}
            className=" group bg-[#1B1B1B] p-10 flex flex-col gap-5 rounded-2xl md:my-10 hover:border border-gray-600 transition-all arrow-hover:text-orange-500">
            <img className=" w-28 h-28" src={serviceCard.icon} alt="" />
            <h1 className=" text-2xl text-white font-semibold">{serviceCard.title}</h1>
            <p className=" text-gray-500">{serviceCard.description}</p>
            <p className=" flex gap-3 hover:text-blue-500 items-center group-hover:">
              Learn more
              <span className="group-hover:text-orange-500 group-hover:animate-bounce">
                <MoveRight />
              </span>
            </p>
          </div>
        ))}
      </div>
      <img
        className=" absolute md:w-36 w-20 right-10 -bottom-0 md:-bottom-0"
        src="/card_icons/Light-image.png"
        alt=""
      />
    </div>
  );
};

export default Services;
