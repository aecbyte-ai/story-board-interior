import React, { useEffect, useState } from "react";

type Service = {
  _id: string;
  title: string;
  description: string;
  icon: string;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/services")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load services");
        return res.json();
      })
      .then((data: Service[]) => setServices(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Our Services
      </h2>
      <p
        className="text-base sm:text-lg text-[#5a5a5a] text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Comprehensive design solutions tailored to your unique vision and lifestyle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div key={service._id} className="bg-white border border-[#e0dcd3] p-6 text-center">
            <div
              className="w-12 h-12 bg-cover bg-no-repeat mx-auto mb-4"
              style={{ backgroundImage: `url(${service.icon})` }}
            />
            <h3
              className="text-lg sm:text-xl font-bold text-[#746b5f] mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {service.title}
            </h3>
            <p
              className="text-base text-[#7a746c] leading-relaxed"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
