import { useEffect, useState } from "react";
import axios from "axios";

interface VisionSectionType {
  heading: string;
  paragraphs: string[];
  imageUrl: string;
}

export const VisionSection = () => {
  const [section, setSection] = useState<VisionSectionType | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/vision")
      .then((res) => setSection(res.data))
      .catch((err) => console.error("Error fetching Vision Section:", err));
  }, []);

  if (!section) return null;

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div
          className="aspect-[4/5] bg-cover bg-center order-2 lg:order-1"
          style={{ backgroundImage: `url(${section.imageUrl})` }}
        />
        <div className="order-1 lg:order-2">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {section.heading}
          </h2>
          {section.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
