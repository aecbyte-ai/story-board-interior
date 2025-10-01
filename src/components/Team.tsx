import React, { useEffect, useState } from "react";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export const Team: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/team")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Error fetching team:", err));
  }, []);

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          OUR TEAM
        </h2>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member) => (
            <div key={member._id} className="text-center">
              <div
                className="aspect-[3/4] bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${member.imageUrl})` }}
              />
              <h3
                className="text-xl sm:text-2xl font-bold text-[#746b5f] mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {member.name}
              </h3>
              <p
                className="text-base text-[#757575]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
