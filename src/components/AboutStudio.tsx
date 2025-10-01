import { useEffect, useState } from "react";
import axios from "axios";

interface AboutStudioData {
  heading: string;
  tagline: string;
  description: string;
}

export const AboutStudio = () => {
  const [about, setAbout] = useState<AboutStudioData | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/about-studio")
      .then((res) => setAbout(res.data))
      .catch((err) => console.error("Error fetching About Studio:", err));
  }, []);

  if (!about) return null;

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {about.heading}
        </h2>
        <p
          className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#746b5f] mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {about.tagline}
        </p>
        <p
          className="text-base sm:text-lg text-[#757575] leading-relaxed"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {about.description}
        </p>
      </div>
    </div>
  );
};
