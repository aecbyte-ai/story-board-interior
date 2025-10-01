import React, { useEffect, useState } from "react";

type BrandLogo = {
  _id: string;
  image: string;
  name?: string;
  link?: string;
};

export default function TrustedBrands() {
  const [brands, setBrands] = useState<BrandLogo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/brands")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load brand logos");
        return res.json();
      })
      .then((data: BrandLogo[]) => setBrands(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2
        className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#746b5f] text-center mb-12 sm:mb-16"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Trusted By World-Class Brands
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-6xl mx-auto opacity-60">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="h-8 sm:h-10 lg:h-12 w-auto bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${brand.image})`,
              aspectRatio: "172/48",
            }}
          />
        ))}
      </div>
    </div>
  );
}
