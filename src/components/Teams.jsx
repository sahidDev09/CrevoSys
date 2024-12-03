import { Link } from "react-router-dom";

const Teams = () => {
  const teams = [
    {
      id: 1,
      picture: "/Team/sahid_withoutGlow.jpg",
      name: "SAHID - CEO",
      pageGoto: "/sahid",
    },
    {
      id: 2,
      picture: "/Team/joyant_withoutGlow.jpg",
      name: "JOYANT - CTO",
      pageGoto: "/joyant",
    },
    {
      id: 3,
      picture: "/Team/mumu_withoutGlow.jpg",
      name: "MUMU - CBO",
      pageGoto: "/mumu",
    },
    {
      id: 4,
      picture: "/Team/abid_withoutGlow.jpg",
      name: "ABID - COO",
      pageGoto: "/abid",
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-5 py-14 px-10">
        {teams.map((team) => (
          <Link to={team.pageGoto} key={team.id}>
            <div className="relative group hover:scale-[101%] transition duration-300 rounded-2xl overflow-hidden">
              {/* Background image for hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${team.picture.replace(
                    "_withoutGlow",
                    "_withGlow"
                  )})`,
                }}>
                <div className="absolute bottom-0 text-center flex flex-col mx-auto w-full bg-gradient-to-t from-[#070707] to-transparent">
                  <h1 className=" font-semibold mb-5 text-white">
                    {team.name}
                  </h1>
                </div>
              </div>

              <img
                className="relative rounded-2xl group-hover:opacity-0 transition-opacity duration-300"
                src={team.picture}
                alt={team.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teams;
