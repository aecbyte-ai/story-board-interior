import React, { useEffect, useState } from "react";

interface CTA {
  heading: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

export const AboutCTA: React.FC = () => {
  const [cta, setCta] = useState<CTA | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/about-cta")
      .then((res) => res.json())
      .then((data) => setCta(data))
      .catch((err) => console.error("Error fetching CTA:", err));
  }, []);

  if (!cta) return null;

  return (
    <div
      className="h-[50vh] sm:h-[60vh] lg:h-[416px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${cta.backgroundImage})` }}
    >
      <h2
        className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {cta.heading}
      </h2>
      <a href={cta.buttonLink}>
        <button
          className="px-6 py-3 bg-white text-[#746b5f] font-semibold uppercase hover:bg-gray-100 transition-colors"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {cta.buttonText}
        </button>
      </a>
    </div>
  );
};

export default AboutCTA;
