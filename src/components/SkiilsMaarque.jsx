import Marquee from "react-fast-marquee";

const SkiilsMaarque = () => {
  return (
    <div className="container mx-auto">
      <h1 className="md:text-5xl md:pb-5 text-4xl text-white text-center mb-4 md:mb-5">
        Familiar Tools
      </h1>

      {/* maarque for right slider */}

      <Marquee
        gradient={true}
        gradientColor="#181726"
        speed={10}
        pauseOnHover={true}
        direction="right"
        autoFill={true}
        className="mt-10 py-3 overflow-hidden">
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/HTML.svg"
          alt="HTML"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/TailwindCSS-Dark.svg"
          alt="TailwindCSS"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Bootstrap.svg"
          alt="Bootstrap"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Supabase-Dark.svg"
          alt="Supabase"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Firebase-Dark.svg"
          alt="Firebase"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/CSS.svg"
          alt="CSS"
        />
        <img
          className="w-20 mr-2 rounded-[25px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/clerk.png"
          alt="Clerk"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/MongoDB.svg"
          alt="MongoDB"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/NodeJS-Dark.svg"
          alt="Node.js"
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/ExpressJS-Dark.svg"
          alt="Express.js"
        />
      </Marquee>
      {/* maarque for left slider */}

      <Marquee
        gradient={true}
        gradientColor="#181726"
        speed={10}
        pauseOnHover={true}
        direction="left"
        autoFill={true}
        className="mb-20 py-3 overflow-hidden">
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Github-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Figma-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Flutter-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/XD.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Photoshop.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Illustrator.svg"
          alt=""
        />
        <img
          className=" w-20 mr-2 rounded-[25px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/NextJS-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Blender-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 rounded-[20px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/moz.png"
          alt=""
        />
        <img
          className="w-20 mr-2 rounded-[20px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/smerush.jpeg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/AndroidStudio-Dark.svg"
          alt=""
        />

        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/ahrefs.webp"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/VSCode-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/React-Dark.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/TypeScript.svg"
          alt=""
        />
        <img
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Redux.svg"
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default SkiilsMaarque;
