import { useEffect, useState } from "react";
import axios from "axios";

interface WhatWeDoType {
  heading: string;
  description: string;
  buttonText: string;
}

export const WhatWeDoSection = () => {
  const [section, setSection] = useState<WhatWeDoType | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/what-we-do")
      .then((res) => setSection(res.data))
      .catch((err) => console.error("Error fetching What We Do Section:", err));
  }, []);

  if (!section) return null;

  return (
    <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {section.heading}
      </h2>
      <p
        className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-8 max-w-4xl mx-auto"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {section.description}
      </p>
      <button
        className="px-6 py-3 bg-[#746b5f] border border-[#858585] text-white font-semibold uppercase shadow-lg hover:bg-[#635a4f] transition-colors"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {section.buttonText}
      </button>
    </div>
  );
};
