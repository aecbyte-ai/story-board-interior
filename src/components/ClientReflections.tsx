import { useEffect, useState } from "react";

interface ClientReflection {
  _id?: string;
  image: string;
  quoteIcon: string;
  quote: string;
  clientName: string;
}

const ClientReflections: React.FC = () => {
  const [reflections, setReflections] = useState<ClientReflection[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/client-reflections")
      .then((res) => res.json())
      .then((data: ClientReflection[]) => setReflections(data))
      .catch((err) => console.error("Error fetching reflections:", err));
  }, []);

  return (
    <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Client Reflections
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reflections.map((reflection) => (
            <div
              key={reflection._id}
              className="bg-white border border-[#e0dcd3] max-w-2xl mx-auto"
            >
              <div
                className="aspect-[3/2] bg-cover bg-center"
                style={{ backgroundImage: `url(${reflection.image})` }}
              />
              <div className="p-6 lg:p-8">
                <div
                  className="w-9 h-9 bg-cover bg-no-repeat mb-4"
                  style={{ backgroundImage: `url(${reflection.quoteIcon})` }}
                />
                <blockquote
                  className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  "{reflection.quote}"
                </blockquote>
                <cite
                  className="text-base font-medium text-[#50504f] not-italic"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {reflection.clientName}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReflections;
