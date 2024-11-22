import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <img className=" w-[40vw]" src="/errorImg.png" alt="" />
      <h1 className=" text-4xl font-bold my-5">Opps 404 page not found</h1>
      <Link to="/">
        <button className=" btn  bg-white text-black">Go to Home</button>
      </Link>
    </div>
  );
};

export default Error;
