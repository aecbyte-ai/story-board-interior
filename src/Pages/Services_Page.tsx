import { useEffect, useState } from "react";
import axios from "axios";

interface Service {
  title: string;
  description1: string;
  description2: string;
  image: string;
  background: string;
  order: number;
}

interface ServicePageData {
  hero: { title: string; description: string; backgroundImage: string };
  intro: { description: string };
  services: Service[];
  gallery: { images: string[] };
  cta: { text: string; buttonText: string; backgroundImage: string };
}

const Services_Page = () => {
  const [data, setData] = useState<ServicePageData | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/servicepage")
      .then((res) => setData(res.data));
    console.log("Service page response:", data);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[50vh] sm:h-[60vh] lg:h-[470px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${data?.hero.backgroundImage})` }}
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {data?.hero.title}
        </h1>
        <p
          className="text-base sm:text-lg lg:text-xl font-medium text-white/80 max-w-4xl mx-auto leading-relaxed"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          {data?.hero.description}
        </p>
      </div>

      {/* Introduction */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-base sm:text-lg lg:text-xl font-medium text-[#746b5f] leading-relaxed"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {data?.intro.description}
          </p>
        </div>
      </div>

      {/* Services */}
      {data?.services.map((service, idx) => (
        <div
          key={idx}
          className={`${
            service.background === "#f2efe9" ? "bg-[#f2efe9]" : "bg-white"
          } py-16 sm:py-20 lg:py-24`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div
                  className={`aspect-[4/5] bg-cover bg-center ${
                    service.order % 2 === 0
                      ? "order-2 lg:order-2"
                      : "order-2 lg:order-1"
                  }`}
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div
                  className={`${
                    service.order % 2 === 0
                      ? "order-1 lg:order-1"
                      : "order-1 lg:order-2"
                  }`}
                >
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] uppercase mb-6"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-base sm:text-lg lg:text-xl text-[#6f6f6f] leading-relaxed mb-6"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {service.description1}
                  </p>
                  <p
                    className="text-base sm:text-lg lg:text-xl text-[#6f6f6f] leading-relaxed"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {service.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Gallery */}
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {data?.gallery.images.map((img, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="h-[50vh] sm:h-[60vh] lg:h-[416px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${data?.cta.backgroundImage})` }}
      >
        <h2
          className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {data?.cta.text}
        </h2>
        <button
          className="px-6 py-3 bg-white text-[#746b5f] font-semibold uppercase hover:bg-gray-100 transition-colors"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {data?.cta.buttonText}
        </button>
      </div>
    </>
  );
};

export default Services_Page;
