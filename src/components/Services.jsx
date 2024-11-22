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
    <div className="relative overflow-hidden services min-h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('/servicebg.png')]">
      <h1 className="text-center py-14 md:text-5xl text-3xl text-white">
        Services Web Provide
      </h1>
      <div className="container mx-auto grid grid-cols-4 gap-7">
        {service.map((serviceCard, index) => (
          <div
            key={index}
            className=" bg-[#1B1B1B] p-10 flex flex-col gap-5 rounded-2xl my-10 hover:border border-gray-600 transition-all">
            <img className=" w-28 h-28" src={serviceCard.icon} alt="" />
            <h1 className=" text-2xl font-semibold">{serviceCard.title}</h1>
            <p className=" text-gray-500">{serviceCard.description}</p>
            <p className=" flex gap-3 items-center group-hover:">
              Learn more
              <span className="group">
                <MoveRight />
              </span>
            </p>
          </div>
        ))}
      </div>
      <img
        className=" absolute w-36 right-10 -bottom-10"
        src="/card_icons/Light-image.png"
        alt=""
      />
    </div>
  );
};

export default Services;
