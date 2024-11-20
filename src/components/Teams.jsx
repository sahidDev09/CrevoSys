const Teams = () => {
  const teams = [
    { id: 1, picture: "sahid_withoutGlow.jpg", name: "SAHID" },
    { id: 2, picture: "joyant_withoutGlow.jpg", name: "JOYANT" },
    { id: 3, picture: "mumu_withoutGlow.jpg", name: "MUMU" },
    { id: 4, picture: "abid_withoutGlow.jpg", name: "ABID" },
    { id: 5, picture: "navid_withoutGlow.jpg", name: "NAVID" },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-5 gap-5 py-10 px-10">
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
                <h1>{team.name}</h1>
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
