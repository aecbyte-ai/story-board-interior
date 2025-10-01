import { useEffect, useState } from "react";
import axios from "axios";
interface CTA {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}


export const CtaSection = () => {
  const [cta, setCta] = useState<CTA | null>(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cta")
      .then(res => setCta(res.data))
      .catch(err => console.error("Error fetching CTA:", err));
  }, []);

  if (!cta) return null;

  return (
    <section 
      className="w-full h-[50vh] sm:h-[60vh] lg:h-[470px] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${cta.backgroundImage})` }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
        {cta.title}
      </h2>
      <p className="text-base sm:text-lg lg:text-2xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
        {cta.description}
      </p>
      <button className="px-6 py-3 bg-white text-[#746b5f] font-semibold uppercase hover:bg-gray-100 transition-colors">
        {cta.buttonText}
      </button>
    </section>
  );
};
