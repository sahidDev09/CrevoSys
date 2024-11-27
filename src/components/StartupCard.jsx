import { ShieldCheck } from "lucide-react";

const StartupCard = () => {
  return (
    <div className="m-4 md:m-0 md:pb-20 py-10 md:bg-[#1D232A]">
      <h1 className=" md:text-5xl md:pb-5 text-4xl text-white text-center mb-5 md:mb-5">
        A Talented team <br /> for-your startup
      </h1>
      <div className=" relative">
        <div className=" absolute z-10 right-0 -bottom-10 hidden md:inline">
          <img className=" w-96" src="/elements/Right-hand.webp" alt="" />
        </div>
        <div className="relative h-[550px] w-full rounded-2xl container mx-auto bg-[#414141] overflow-hidden">
          <div className=" absolute h-96 w-96 bg-gradient-to-b from-[#A542E2] to-[#1BB6EB] rounded-full bg-no-repeat -top-14 -right-14 bg-contain "></div>
          {/* all content */}
          <div className=" absolute w-full md:p-10 p-5">
            {/* card header */}
            <div className="flex justify-between items-center">
              <div className=" flex md:gap-10 items-center">
                <img
                  className=" md:w-36 w-20 rounded-full"
                  src="/elements/Rectangle.png"
                  alt=""
                />
                <h1 className=" text-white text-3xl w-[500px] font-semibold hidden md:inline">
                  Our awesome team is creating a specialised marketplace
                  tailored for our clients.
                </h1>
              </div>
              <div>
                <button className="md:p-3 p-2 bg-white rounded-full md:text-xl text-sm font-semibold uppercase text-black">
                  Join with team
                </button>
              </div>
            </div>
            <div className="md:w-[75%] p-4 md:flex gap-14">
              <div className="flex md:flex-col gap-10 my-4">
                <div>
                  <ShieldCheck size={50} color="#ffffff" strokeWidth={1.25} />
                  <h1 className=" md:text-xl text-sm text-white mt-2">
                    <span className=" font-bold">CrevoSys</span> team working
                    for <br /> your agency
                  </h1>
                </div>
                <div>
                  <ShieldCheck size={50} color="#ffffff" strokeWidth={1.25} />
                  <h1 className=" md:text-xl text-sm text-white mt-2">
                    <span className=" font-bold">With more than 2 </span> years
                    real <br /> experience.
                  </h1>
                </div>
              </div>
              <div className="text-start mx-auto flex flex-col gap-5 justify-center">
                <h1 className="md:text-9xl text-6xl font-extrabold text-white">
                  06
                </h1>
                <p className=" md:text-xl text-white">
                  We have 6+ talented and skilled <br /> team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
