import React from "react";
import Image from "next/image";

const TopTeams = () => {
  const teams = [
    { name: "Argentina", logo: "/teams/Argentina.png" },
    { name: "Brazil", logo: "/teams/brazil.jpeg" },
    { name: "Portugal", logo: "/teams/Portu.png" },
    { name: "Barcelona", logo: "/teams/Barcelona.png" },
    { name: "Real Madrid", logo: "/teams/realmadrid.png" },
    { name: "Manchester United", logo: "/teams/manu.jpeg" },
  ];

  // Duplicate list for infinite scroll
  const loopTeams = [...teams, ...teams];

  return (
    <div className="py-14 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Top Selling Clubs & Nations
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Shop original & premium-quality jerseys from top teams worldwide.
      </p>

      <div className="mt-12 relative w-full overflow-hidden">
        {/* Scroll Wrapper */}
        <div className="flex animate-scroll gap-8 hover:[animation-play-state:paused]">
          {loopTeams.map((team, index) => (
            <div
              key={index}
              className="min-w-[140px] md:min-w-[180px] bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer border flex flex-col items-center"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={team.logo}
                  alt={team.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-700 mt-2">
                {team.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TopTeams;
