import info from "/src/json/sumoninfo.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Sumon = () => {
  const { personalInfo, socialMedia, projects } = info;
  return (
    <div className="min-h-screen container mx-auto md:mt-10 p-4 md:p-0">
      {/* header */}
      <div className="md:flex items-center gap-10">
        <div className=" border border-gray-500 md:w-72 md:h-72 w-32 h-32 rounded-full bg-red-500 bg-[url('/Team/sumon_withoutGlow.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div>
          <h1 className="md:text-8xl text-4xl font-black">
            {personalInfo.name}
          </h1>
          <p className="md:text-3xl text-lg tracking-wide">
            {personalInfo.position}
          </p>
          <p className="md:text-2xl">Email : {personalInfo.email}</p>
          <p className=" md:text-3xl">
            A skilled
            <span className=" text-[#FB923C]"> {personalInfo.designation}</span>
          </p>
        </div>
      </div>
      {/* social media handles */}
      <div>
        <h1 className="md:text-2xl font-semibold md:mt-7 mt-4 text-white uppercase">
          Let&apos;s connect
        </h1>
      </div>
      <div className=" flex flex-wrap items-center md:gap-4 gap-1 p-3 rounded-xl mb-10 mt-3 bg-zinc-700">
        {socialMedia.map((social, index) => (
          <a href={social.link} target="_blank" key={index}>
            <button className=" hover:bg-[#FB923C] flex items-center md:gap-2 gap-1 text-xs md:text-base">
              <img className="md:w-8 md:h-8 w-5 h-5" src={social.icon} alt="" />
              {social.socialname}
            </button>
          </a>
        ))}
      </div>
      {/* tabs */}
      <div>
        <Tabs defaultValue="animation" className="w-full">
          <TabsList className=" bg-zinc-700 md:p-2 h-full rounded-[5px] md:gap- gap-1">
            <TabsTrigger
              className=" md:text-lg text-xs rounded-[5px]"
              value="animation">
              Projects Completed{" "}
            </TabsTrigger>
          </TabsList>

          {/* animation and front end */}
          <TabsContent
            className="grid md:grid-cols-3 gap-7 my-5"
            value="animation">
            {projects.length === 0 ? (
              <div className=" flex gap-4 items-center w-screen">
                <img
                  className=" w-56"
                  src="https://i.postimg.cc/L6tDXC1J/empty.png"
                  alt=""
                />
                <div className=" mt-5">
                  <h1 className=" text-3xl text-white">Not Available yet!</h1>
                  <p>
                    You&apos;ll get notification when projects are available
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {projects.map((anim, index) => (
                  <div className="" key={index}>
                    <Card className="h-full rounded-[5px] border-none bg-zinc-700 text-white">
                      <CardHeader>
                        <img src={anim.image} alt="" />
                        <CardTitle>{anim.projectName}</CardTitle>
                        <CardDescription className="md:text-lg text-gray-400">
                          Type: {anim.type}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="hover:bg-transparent ">
                        <a
                          href={anim.live}
                          target="_blank"
                          className="hover:bg-[#FB923C] transition-all flex gap-3 items-center w-full justify-center rounded-[5px] bg-zinc-800  hover:cursor-pointer">
                          <button className=" bg-transparent">
                            Live Preview
                          </button>
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sumon;
