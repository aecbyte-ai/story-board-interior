interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  year?: number;
}
const Project_Card = ({ project }: { project: Project }) => {
  return (
    // <article className="bg-white border border-[#e0dcd3] hover:shadow-lg transition-shadow duration-300 group">
    //     <div className="aspect-[4/3] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/b0WmPuaWec.png)] bg-cover bg-center border-b border-[#e0dcd3] group-hover:scale-105 transition-transform duration-300 overflow-hidden" />
    //     <div className="p-4 sm:p-6 lg:p-8">
    //         <h3 className="font-['Cormorant_Garamond'] text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] mb-3">
    //             Kensington Townhouse, London
    //         </h3>
    //         <p className="font-['Manrope'] text-sm sm:text-base text-[#7a746c] mb-4 sm:mb-6">
    //             Residential | 2025
    //         </p>
    //         <button className="flex items-center gap-2 px-3 sm:px-4 py-2 hover:bg-[#f8f6f3] transition-colors">
    //             <span className="font-['Cormorant_Garamond'] text-sm sm:text-base font-bold text-[#746b5f] uppercase">
    //                 View Project
    //             </span>
    //             <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/SxwjzOvxCR.png)] bg-cover bg-no-repeat" />
    //         </button>
    //     </div>
    // </article>
    <article className="bg-white border border-[#e0dcd3] hover:shadow-lg transition-shadow duration-300 group">
      <div
        className="aspect-[4/3] bg-cover bg-center border-b border-[#e0dcd3] group-hover:scale-105 transition-transform duration-300 overflow-hidden"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="font-['Cormorant_Garamond'] text-lg sm:text-xl lg:text-2xl font-bold text-[#746b5f] mb-3">
          {project.title}
        </h3>
        <p className="font-['Manrope'] text-sm sm:text-base text-[#7a746c] mb-4 sm:mb-6">
          {project.category} {project.year ? `| ${project.year}` : ""}
        </p>
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 hover:bg-[#f8f6f3] transition-colors">
          <span className="font-['Cormorant_Garamond'] text-sm sm:text-base font-bold text-[#746b5f] uppercase">
            View Project
          </span>
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/SxwjzOvxCR.png)] bg-cover bg-no-repeat" />
        </button>
      </div>
    </article>
  );
};

export default Project_Card;
