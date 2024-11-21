const Teams = () => {
  const teams = [
    { id: 1, picture: "sahid_withoutGlow.jpg", name: "SAHID - CEO" },
    { id: 2, picture: "joyant_withoutGlow.jpg", name: "JOYANT - CTO" },
    { id: 3, picture: "mumu_withoutGlow.jpg", name: "MUMU - CBO" },
    { id: 4, picture: "abid_withoutGlow.jpg", name: "ABID - COO" },
    
  ];

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-5 py-14 px-10 bg-[#0F0D13]">
        {teams.map((team) => (
          <div
            key={team.id}
            className="relative group hover:scale-105 transition-all rounded-2xl overflow-hidden">
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
                <h1 className=" font-semibold mb-5 text-white">{team.name}</h1>
              </div>
            </div>

            <img
              className="relative rounded-2xl group-hover:opacity-0 transition-opacity duration-300"
              src={team.picture}
              alt={team.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
