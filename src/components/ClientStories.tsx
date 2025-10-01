import { useEffect, useState } from "react";
import axios from "axios";

interface ClientStory {
  _id: string;
  icon: string;
  quote: string;
  author: string;
}

export const ClientStories = () => {
  const [stories, setStories] = useState<ClientStory[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/client-stories")
      .then((res) => setStories(res.data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          More Client Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stories.map((story) => (
            <div key={story._id} className="bg-[#f2efe9] border border-[#c6c6c6] p-4 sm:p-6">
              <div
                className="w-8 h-8 bg-cover bg-no-repeat mb-3"
                style={{ backgroundImage: `url(${story.icon})` }}
              />
              <blockquote
                className="text-base sm:text-lg lg:text-xl font-semibold text-[#746b5f] leading-relaxed mb-6"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {story.quote}
              </blockquote>
              <cite
                className="text-base font-medium text-[#51504f] not-italic"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {story.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
