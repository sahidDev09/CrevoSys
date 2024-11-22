import { ArrowRight } from "lucide-react";

const GetTouch = () => {
  return (
    <div className=" my-14 relative min-h-full m-2">
      <h4 className=" flex gap-2 items-center text-2xl mx-auto justify-center">
        <ArrowRight /> <span>Get in touch</span>
      </h4>
      <h1 className="md:text-8xl text-4xl tracking-wide text-center my-3 text-white">
        Let&apos;s get started <br />
        with our team
      </h1>
      <p className=" text-center my-5 text-gray-500 text-sm md:text-base">
        Use customer data to build great and solid product <br /> experiences
        that convert.
      </p>
      <button className="flex mx-auto bg-gradient-to-b from-[#FFB16B] to-[#996A40]">
        Let&apos;s get in touch
      </button>
      <img
        className="absolute -bottom-32 md:w-80 hidden md:inline right-16"
        src="/Color-line-shape.webp"
        alt=""
      />
    </div>
  );
};

export default GetTouch;
