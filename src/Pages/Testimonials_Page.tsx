import { TestimonialHeroSection } from "../components/TestimonialHero";
import { FeaturedTestimonialSection } from "../components/FeaturedTestimonial";
import { BeforeAfterTestimonialSection } from "../components/BeforeAfterTestimonial";
import ClientReflections from "../components/ClientReflections";
import { ClientStories } from "../components/ClientStories";
import { JoinClientCommunity } from "../components/JoinClientCommunity";
const Testimonials_Page = () => {
  return (
    <>
      <TestimonialHeroSection />

      <FeaturedTestimonialSection />

      <BeforeAfterTestimonialSection />

      <ClientReflections />

      <ClientStories />
    </>
  );
};

export default Testimonials_Page;
