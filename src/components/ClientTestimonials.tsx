import React, { useEffect, useState } from "react";

type Testimonial = {
  _id: string;
  text: string;
  client: string;
  project?: string;
};

export default function ClientTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/testimonials")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load testimonials");
        return res.json();
      })
      .then((data: Testimonial[]) => setTestimonials(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24 mt-16 sm:mt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Client Testimonials
        </h2>
        <p
          className="text-base sm:text-lg text-[#7a746c] text-center mb-12 sm:mb-16"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Words from Those We’ve Designed For
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t._id}
              className="bg-white border border-[#eaeaea] p-6 lg:p-8"
            >
              <p
                className="text-base sm:text-lg font-medium text-[#7a746c] text-center mb-6 leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                “{t.text}”
              </p>
              <p
                className="text-base sm:text-lg text-[#746b5f] text-center"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {t.client}
                {t.project ? `, ${t.project}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
