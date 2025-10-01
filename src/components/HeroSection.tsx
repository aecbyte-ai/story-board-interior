import React from "react";

interface Hero {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  scrollText: string;
  scrollIconUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface HeroSectionProps {
  data: Hero;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${data.imageUrl})` }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase mb-4">
          {data.title}
        </h1>
        <p className="font-['Manrope'] text-base sm:text-lg lg:text-xl font-medium text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {data.scrollText && (
        <div className="absolute bottom-8 flex-col items-center hidden sm:flex">
          <span className="font-['Cormorant_Garamond'] text-sm font-bold text-white uppercase mb-3">
            {data.scrollText}
          </span>
          {data.scrollIconUrl && (
            <div
              className="w-6 h-6 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${data.scrollIconUrl})` }}
            />
          )}
        </div>
      )}
    </section>
  );
}
