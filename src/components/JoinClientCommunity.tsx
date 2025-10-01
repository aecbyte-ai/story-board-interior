import { useState } from "react";
import axios from "axios";

export const JoinClientCommunity = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/client-community", {
        fullName,
        email,
        testimonial,
      });
      setSuccess(true);
      setFullName("");
      setEmail("");
      setTestimonial("");
    } catch (err) {
      console.error("Error submitting testimonial:", err);
      setSuccess(false);
    }
  };

  return (
    <div className="h-[100vh] sm:h-[80vh] lg:h-[795px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/3srpapasjQ.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 lg:p-12 max-w-2xl w-full mx-4">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Join Our Client Community
        </h2>
        <p
          className="text-base sm:text-lg lg:text-xl text-[#757575] text-center mb-8"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Share your experience with Shalini Misra
        </p>

        {success && (
          <p className="text-green-600 text-center mb-4 font-semibold">
            Thank you for sharing your story!
          </p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base font-normal text-[#3d3d3d] mb-3">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-12 sm:h-14 bg-white border border-[#c2c2c2] px-4 py-3 text-base text-[#757575] focus:outline-none focus:border-[#746b5f] transition-colors"
            />
          </div>

          <div>
            <label className="block text-base font-normal text-[#3d3d3d] mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 sm:h-14 bg-white border border-[#c2c2c2] px-4 py-3 text-base text-[#757575] focus:outline-none focus:border-[#746b5f] transition-colors"
            />
          </div>

          <div>
            <label className="block text-base font-normal text-[#3d3d3d] mb-3">
              Your Testimonial
            </label>
            <textarea
              placeholder="Share your experience with us"
              rows={4}
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              className="w-full bg-white border border-[#c2c2c2] px-4 py-3 text-base text-[#757575] focus:outline-none focus:border-[#746b5f] transition-colors resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#746b5f] border border-[#858585] text-white font-semibold uppercase shadow-lg hover:bg-[#635a4f] transition-colors"
          >
            Share Your Story
          </button>
        </form>
      </div>
    </div>
  );
};
