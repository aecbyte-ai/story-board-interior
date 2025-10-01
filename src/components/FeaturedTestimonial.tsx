import { useEffect, useState } from "react";
import axios from "axios";

interface FeaturedTestimonial {
  quote: string;
  description: string;
  author: string;
  designation: string;
  imageUrl: string;
}

export const FeaturedTestimonialSection = () => {
  const [testimonial, setTestimonial] = useState<FeaturedTestimonial | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/featured-testimonial")
      .then((res) => setTestimonial(res.data))
      .catch((err) => console.error("Error fetching Featured Testimonial:", err));
  }, []);

  if (!testimonial) return null;

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <blockquote
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#746b5f] mb-6 leading-relaxed"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "{testimonial.quote}"
            </blockquote>
            <p
              className="text-base sm:text-lg text-[#757575] leading-relaxed mb-6"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {testimonial.description}
            </p>
            <cite
              className="text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] not-italic block mb-2"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {testimonial.author}
            </cite>
            <p
              className="text-base sm:text-lg text-[#757575]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {testimonial.designation}
            </p>
          </div>

          {/* Image Section */}
          <div
            className="aspect-[4/5] bg-cover bg-center order-1 lg:order-2"
            style={{ backgroundImage: `url(${testimonial.imageUrl})` }}
          />
        </div>
      </div>
    </div>
  );
};
