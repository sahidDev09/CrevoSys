const Teams = () => {
  const teams = [
    {
      id: 1,
      picture: "sahid_withoutGlow.jpg",
      name: "SAHID",
    },
    {
      id: 2,
      picture: "joyant_withoutGlow.jpg",
      name: "JOYANT",
    },

    {
      id: 4,
      picture: "mumu_withoutGlow.jpg",
      name: "MUMU",
    },
    {
      id: 3,
      picture: "abid_withoutGlow.jpg",
      name: "ABID",
    },
    {
      id: 5,
      picture: "navid_withoutGlow.jpg",
      name: "NAVID",
    },
    {
      id: 6,
      picture: "sumon_withoutGlow.jpg",
      name: "SUMON",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-6 gap-5 py-10 mx-10">
        {teams.map((team) => (
          <div key={team.id}>
            <img className=" rounded-2xl" src={team.picture} alt="ntg" />
            <h1 className=" text-white text-center font-bold mt-2">{team.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
