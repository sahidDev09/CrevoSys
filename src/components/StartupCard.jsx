const StartupCard = () => {
  return (
    <div>
      <h1 className=" md:text-6xl text-white text-center my-5">
        A Talented team <br /> for-your startup
      </h1>
      <div className=" relative">
        <div className=" absolute z-10 right-0 -bottom-10">
          <img className=" w-96" src="/public/Right-hand.webp" alt="" />
        </div>
        <div className="relative h-[550px] w-full rounded-2xl container mx-auto bg-gradient-to-b from-[#F6AA68] to-[#90643D] overflow-hidden">
          <div className=" absolute h-96 w-96 bg-gradient-to-b from-[#A542E2] to-[#1BB6EB] rounded-full bg-no-repeat -top-14 -right-14 bg-contain "></div>
          {/* all content */}
          <div className=" absolute w-full p-10">
            <div className="flex justify-between items-center">
              <div className=" flex gap-7 items-center">
                <img
                  className=" w-36 rounded-full"
                  src="/public/Rectangle.png"
                  alt=""
                />
                <h1 className=" text-black text-3xl w-[600px] font-semibold">
                  Our awesome team is creating a specialised marketplace
                  tailored for our clients.
                </h1>
              </div>
              <div>
                <button className=" p-3 bg-white rounded-full text-xl font-semibold uppercase text-black">
                  JOin with us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;
