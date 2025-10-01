import { useEffect, useState } from "react";
import axios from "axios";

interface TestimonialHero {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const TestimonialHeroSection = () => {
  const [hero, setHero] = useState<TestimonialHero | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/testimonial-hero")
      .then((res) => setHero(res.data))
      .catch((err) => console.error("Error fetching Testimonial Hero:", err));
  }, []);

  if (!hero) return null;

  return (
    <div
      className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <h1
        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase mb-4"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {hero.title}
      </h1>
      <p
        className="text-base sm:text-lg lg:text-xl font-medium text-white/80 max-w-4xl mx-auto leading-relaxed"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {hero.subtitle}
      </p>
    </div>
  );
};
