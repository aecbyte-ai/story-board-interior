import React, { useEffect, useState } from "react";
import axios from "axios";

interface Hero {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  scrollText?: string;
  scrollIconUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const HomeHeroSection: React.FC = () => {
  const [heroData, setHeroData] = useState<Hero | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        // Use page query or separate route
        const res = await axios.get<Hero>(
          "http://localhost:3000/api/home-hero"
        );
        setHeroData(res.data);
      } catch (err) {
        console.error("Error fetching home hero:", err);
      }
    };

    fetchHero();
  }, []);

  if (!heroData) return null; // optional loader

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-blend-multiply flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${heroData.imageUrl})` }}
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto py-16 sm:py-20">
        <h1 className="font-bold text-white uppercase mb-6">
          <span
            className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {heroData.title}
          </span>
          <span
            className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mt-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {heroData.subtitle}
          </span>
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto font-medium mb-8 px-4"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {heroData.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-4 sm:px-6 py-3 bg-[#746b5f] border border-[#858585] text-white font-semibold uppercase shadow-lg hover:bg-[#635a4f] transition-colors text-sm sm:text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            View Portfolio
          </button>
          <button
            className="px-4 sm:px-6 py-3 border border-white text-white font-semibold uppercase hover:bg-white hover:text-[#746b5f] transition-colors text-sm sm:text-base"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Meet the Studio
          </button>
        </div>
      </div>

      {heroData.scrollText && (
        <div className="text-center pb-8 hidden sm:block">
          <p
            className="text-white text-sm font-bold uppercase mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {heroData.scrollText}
          </p>
          {heroData.scrollIconUrl && (
            <div
              className="w-6 h-6 bg-cover bg-no-repeat mx-auto"
              style={{ backgroundImage: `url(${heroData.scrollIconUrl})` }}
            />
          )}
        </div>
      )}
    </section>
  );
};
