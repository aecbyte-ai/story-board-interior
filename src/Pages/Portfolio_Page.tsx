import { useState, useEffect } from "react";
import axios from "axios";
import Project_Card from "../components/project_card";
import { HeroSection } from "../components/HeroSection";
import { CtaSection } from "../components/CTA";

export interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}
export interface Hero {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  scrollText: string;
  scrollIconUrl: string;
  createdAt: string;
  updatedAt: string;
}
const Portfolio_Page = () => {
  const [heroData, setHeroData] = useState<Hero | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, featuredRes, projectsRes] = await Promise.all([
          axios.get<Hero>("http://localhost:3000/api/hero"),
          axios.get<Project[]>("http://localhost:3000/api/featuredprojects"),
          axios.get<Project[]>("http://localhost:3000/api/projects"),
        ]);

        setHeroData(heroRes.data);
        setFeaturedProjects(featuredRes.data);
        setProjects(projectsRes.data);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="text-center py-32 text-gray-500">Loading portfolio...</p>
    );
  }

  return (
    <>
      {/* Hero Section */}
      {heroData && <HeroSection data={heroData} />}

      {/* Recent Projects Section */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 lg:mb-16">
            Recent Projects
          </h2>

          {projects.length === 0 ? (
            <p className="text-center text-gray-500">No projects available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project) => (
                <Project_Card key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects Section */}
      {/* Featured Projects Section */}
      <section className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Featured Projects
            </h2>

            <div className="relative">
              {/* Navigation buttons */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/V1AvJFvXqb.png)] bg-cover bg-no-repeat" />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 border border-[#746b5f] flex items-center justify-center">
                <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/NeArhaiCCs.png)] bg-cover bg-no-repeat" />
              </button>

              {/* Featured projects grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mx-8 sm:mx-12 lg:mx-16">
                {featuredProjects.map((project) => (
                  <div
                    key={project._id}
                    className="aspect-[4/5] bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  />
                ))}
              </div>
            </div>

            {/* Project details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 sm:mt-12">
              {featuredProjects.map((project) => (
                <div key={project._id} className="text-center lg:text-left">
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#746b5f] mb-4"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg text-[#7a746c] leading-relaxed mb-6"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {project.description}
                  </p>
                  <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#e8e5df] transition-colors mx-auto lg:mx-0">
                    <span
                      className="text-base font-bold text-[#746b5f] uppercase"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      View Project
                    </span>
                    <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/tY3GHRiUwM.png)] bg-cover bg-no-repeat" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default Portfolio_Page;
