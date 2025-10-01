import { AboutHero } from "../components/AboutHero";
import { AboutStudio } from "../components/AboutStudio";
import { WhatWeDoSection } from "../components/WhatWeDoSection";
import { VisionSection } from "../components/VisionSection";
import { Team } from "../components/Team";
import { AboutCTA } from "../components/AboutCTA";
const About_Page = () => {
  return (
    <>
      <AboutHero />

      <AboutStudio />

      <VisionSection />

      <WhatWeDoSection />

      <Team />

      <AboutCTA />
      {/* <div className="h-[50vh] sm:h-[60vh] lg:h-[416px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/zkm9j9h7hh.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4">
        <h2
          className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Let us help you shape your space into something extraordinary.
        </h2>
        <button
          className="px-6 py-3 bg-white text-[#746b5f] font-semibold uppercase hover:bg-gray-100 transition-colors"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Book a Consultation
        </button>
      </div> */}
    </>
  );
};

export default About_Page;
