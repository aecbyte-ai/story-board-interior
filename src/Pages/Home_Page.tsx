import AboutSection from "../components/AboutSection";
import { HomeHeroSection } from "../components/HomeHeroSection";
import { DesignEthos } from "../components/DesignEthos";
import SignatureProjects from "../components/SignatureProject";
import Services from "../components/Services";
import Instagram from "../components/Instagram";
import TrustedBrands from "../components/TrustedBrands";
import ClientTestimonials from "../components/ClientTestimonials";
import Subscriber from "../components/Subscriber";
const Home_Page = () => {
  return (
    <>
      <HomeHeroSection />

      <DesignEthos />

      <SignatureProjects />

      <AboutSection />

      <Services />

      <Instagram />

      <TrustedBrands />

      <ClientTestimonials/>
      
      <Subscriber />
    </>
  );
};

export default Home_Page;
