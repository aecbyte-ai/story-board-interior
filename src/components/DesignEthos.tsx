// src/components/DesignEthos.jsx
import React, { useEffect, useState } from "react";

type EthosCard = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
};
export function DesignEthos() {
  const [items, setItems] = useState<EthosCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/design-ethos");
        if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load design ethos cards.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div className="py-12 text-center">Loading...</div>;
  if (error)
    return <div className="py-12 text-center text-red-600">{error}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mt-16 sm:mt-24"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Design Ethos
      </h2>
      <p
        className="text-base sm:text-lg text-[#7a746b] text-center mt-4 max-w-4xl mx-auto"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Our philosophy is built on three foundational pillars that guide every
        project we undertake.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12 max-w-7xl mx-auto">
        {items.map((it) => (
          <div key={it._id} className="bg-[#f2efe9] border border-[#e0dcd3]">
            <div
              className="h-48 sm:h-64 lg:h-72 bg-cover bg-center border-b border-[#e0dcd3]"
              style={{ backgroundImage: `url(${it.imageUrl})` }}
            />
            <div className="p-6 lg:p-8">
              <h3
                className="text-xl lg:text-2xl font-bold text-[#746b5f] mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {it.title}
              </h3>
              <p
                className="text-base text-[#7a746c] leading-relaxed"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {it.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
