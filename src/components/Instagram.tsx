import React, { useEffect, useState } from "react";

type InstagramPost = {
  _id: string;
  image: string;
  overlayIcon?: string;
};

export default function Instagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/instagram")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load Instagram posts");
        return res.json();
      })
      .then((data: InstagramPost[]) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="bg-[#f2efe9] py-16 sm:py-20 lg:py-24 mt-16 sm:mt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] text-center uppercase mb-12 sm:mb-16"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Instagram
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-8">
          {posts.map((post) => (
            <div key={post._id} className="relative aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
              {post.overlayIcon && (
                <div
                  className="absolute top-4 right-4 w-6 h-6 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${post.overlayIcon})` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-[#e8e5df] transition-colors mx-auto">
            <span
              className="text-base font-bold text-[#746b5f] uppercase"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Follow US
            </span>
            <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Gx7t4CN6SO.png)] bg-cover bg-no-repeat" />
          </button>
        </div>
      </div>
    </div>
  );
}
