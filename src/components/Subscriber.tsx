import React, { useState } from "react";

export default function Subscriber() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email");
      return;
    }
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:3000/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Subscription failed");

      setMessage(data.message);
      setEmail("");
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#746b5f] py-16 sm:py-20 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Let Inspiration Find You
        </h2>
        <p
          className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Receive curated insights, new project releases, and exclusive invitations.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex border border-[#e0dcd3]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-base text-[#efefef] bg-transparent placeholder-[#efefef] focus:outline-none"
              style={{ fontFamily: "Manrope, sans-serif" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-3 bg-white text-[#746b5f] font-semibold uppercase text-sm sm:text-base hover:bg-gray-100 transition-colors"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {loading ? "Submitting..." : "Join the List"}
            </button>
          </div>
        </form>

        {message && <p className="text-white/90 mt-4">{message}</p>}
      </div>
    </div>
  );
}
