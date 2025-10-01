
export interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}
export const FeaturedProject = ({ project }: { project: Project }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8 sm:mt-12">
    <div
      className="aspect-[4/5] bg-cover bg-center"
      style={{ backgroundImage: `url(${project.imageUrl})` }}
    />
    <div className="text-center lg:text-left">
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
        <div
          className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/tY3GHRiUwM.png)] bg-cover bg-no-repeat"
        />
      </button>
    </div>
  </div>
);