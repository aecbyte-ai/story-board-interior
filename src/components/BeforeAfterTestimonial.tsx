import { useEffect, useState } from "react";
import axios from "axios";

interface BeforeAfterTestimonial {
  beforeImage: string;
  afterImage: string;
  quote: string;
}

export const BeforeAfterTestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<BeforeAfterTestimonial[]>(
    []
  );

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/before-after-testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {testimonials.map((t, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <div className="text-center">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] uppercase mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Before
                </h3>
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.beforeImage})` }}
                />
              </div>
              <div className="text-center">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] uppercase mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  After
                </h3>
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.afterImage})` }}
                />
              </div>
            </div>

            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <blockquote
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#746b5f] leading-relaxed"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                "{t.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
