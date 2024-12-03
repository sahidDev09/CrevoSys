import Marquee from "react-fast-marquee";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";

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
          data-tooltip-id="tooltip"
          data-tooltip-content="HTML"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/HTML.svg"
          alt="HTML"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="TailwindCSS"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/TailwindCSS-Dark.svg"
          alt="TailwindCSS"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="Bootstrap"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Bootstrap.svg"
          alt="Bootstrap"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="Supabase"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Supabase-Dark.svg"
          alt="Supabase"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="Firebase"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Firebase-Dark.svg"
          alt="Firebase"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="CSS"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/CSS.svg"
          alt="CSS"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="Clerk"
          className="w-20 mr-2 rounded-[25px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/clerk.png"
          alt="Clerk"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="MongoDB"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/MongoDB.svg"
          alt="MongoDB"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="Node.js"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/NodeJS-Dark.svg"
          alt="Node.js"
        />
        <img
          data-tooltip-id="tooltip"
          data-tooltip-content="Express.js"
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
        className="mb-20 py-3 overflow-hidden z-50">
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="GitHub"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Github-Dark.svg"
          alt="GitHub"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Figma"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Figma-Dark.svg"
          alt="Figma"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Flutter"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Flutter-Dark.svg"
          alt="Flutter"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="XD"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/XD.svg"
          alt="XD"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Photoshop"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Photoshop.svg"
          alt="Photoshop"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Illustrator"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Illustrator.svg"
          alt="Illustrator"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Next.js"
          className=" w-20 mr-2 rounded-[25px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/NextJS-Dark.svg"
          alt="Next"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Blender"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Blender-Dark.svg"
          alt="Blender"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Moz"
          className="w-20 mr-2 rounded-[20px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/moz.png"
          alt="Moz"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="SMErush"
          className="w-20 mr-2 rounded-[20px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/smerush.jpeg"
          alt="amerush"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Android Studio"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/AndroidStudio-Dark.svg"
          alt="Android studio"
        />

        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Ahrefs"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/ahrefs.webp"
          alt="ahrefs"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="VsCode"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/VSCode-Dark.svg"
          alt="vscode"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="React.js"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/React-Dark.svg"
          alt="react"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Typescript"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/TypeScript.svg"
          alt="typescript"
        />
        <img
          data-tooltip-id="tooltip2"
          data-tooltip-content="Redux"
          className="w-20 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105"
          src="/icons/Redux.svg"
          alt="Redux"
        />
      </Marquee>

      {/* Tooltip Component */}
      <ReactTooltip id="tooltip2" place="bottom" />
      <Tooltip id="tooltip" />
    </div>
  );
};

export default SkiilsMaarque;
