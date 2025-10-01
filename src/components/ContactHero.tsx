import { useState, useEffect } from "react";
import axios from "axios";

export default function HeroSection() {
  const [hero, setHero] = useState({ title: "", subtitle: "", imageUrl: "" });

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/hero");
        setHero(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHero();
  }, []);

  if (!hero.title) return <div>Loading...</div>;

  return (
    <section
      className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 text-center relative z-10"
      style={{ backgroundImage: `url(${hero.imageUrl})` }}
    >
      <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white uppercase mb-4 max-w-4xl">
        {hero.title}
      </h1>
      <p className="font-['Manrope'] text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[rgba(255,255,255,0.8)] max-w-4xl">
        {hero.subtitle}
      </p>
    </section>
  );
}
