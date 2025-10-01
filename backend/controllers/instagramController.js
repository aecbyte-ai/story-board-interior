import InstagramPost from "../models/InstagramPost.js";

// GET all Instagram posts
export const getInstagramPosts = async (req, res) => {
  try {
    const posts = await InstagramPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error("getInstagramPosts error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST new Instagram post (admin use)
export const createInstagramPost = async (req, res) => {
  try {
    const { image, overlayIcon } = req.body;
    const post = await InstagramPost.create({ image, overlayIcon });
    res.status(201).json(post);
  } catch (err) {
    console.error("createInstagramPost error:", err);
    res.status(500).json({ message: "Failed to create Instagram post" });
  }
};
