import info from "/public/sahidinfo.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Sahid = () => {
  const { personalInfo, socialMedia } = info;

  return (
    <div className=" h-screen container mx-auto mt-10">
      {/* header */}
      <div className=" flex items-center gap-10">
        <div className=" border border-gray-500 w-72 h-72 rounded-full bg-red-500 bg-[url('/Team/sahid_withoutGlow.jpg')] bg-no-repeat bg-center bg-cover"></div>
        <div>
          <h1 className=" text-8xl font-black">{personalInfo.name}</h1>
          <p className=" text-3xl tracking-wide">{personalInfo.position}</p>
          <p className=" text-2xl">Email : {personalInfo.email}</p>
          <p className="  text-3xl">
            A skilled{" "}
            <span className=" text-[#FB923C]">{personalInfo.designation}</span>
          </p>
        </div>
      </div>
      {/* social media handles */}
      <div className=" flex items-center gap-4 p-3 rounded-xl my-10 bg-zinc-700">
        {socialMedia.map((social, index) => (
          <a href={social.link} target="_blank" key={index}>
            <button className=" hover:bg-[#FB923C] flex items-center gap-2">
              <img className=" w-8 h-8" src={social.icon} alt="" />
              {social.socialname}
            </button>
          </a>
        ))}
      </div>
      {/* tabs */}
      <div>
        <Tabs defaultValue="account" className=" w-full h-full">
          <TabsList className=" bg-zinc-700 p-2 h-full rounded-[5px] gap-2">
            <TabsTrigger className=" text-md rounded-[5px]" value="account">
              Full-Stack
            </TabsTrigger>
            <TabsTrigger className=" text-md rounded-[5px]" value="password">
              Front-end & Animation{" "}
            </TabsTrigger>
            <TabsTrigger className=" text-md rounded-[5px]" value="design">
              Ui Design{" "}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="design">Ui design here...</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sahid;
