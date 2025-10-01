import React, { useEffect, useState } from "react";

type About = {
  heading: string;
  paragraphs: string[];
  imageUrl: string;
  buttonText?: string;
  buttonIcon?: string;
  buttonLink?: string;
};

export default function AboutSection() {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/about")
      .then((res) => res.json())
      .then((data: About) => setAbout(data))
      .catch((err) => console.error(err));
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className="aspect-[4/5] bg-cover bg-center order-2 lg:order-1"
            style={{ backgroundImage: `url(${about.imageUrl})` }}
          />
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              {about.heading}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                {p}
              </p>
            ))}
            {about.buttonText && (
              <a href={about.buttonLink || "#"} className="flex items-center gap-3 px-4 py-3 hover:bg-[#f8f6f3] transition-colors">
                <span className="text-base font-bold text-[#746b5f] uppercase" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {about.buttonText}
                </span>
                {about.buttonIcon && (
                  <div className="w-5 h-5 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${about.buttonIcon})` }} />
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
