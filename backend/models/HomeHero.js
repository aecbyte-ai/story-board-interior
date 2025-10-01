import mongoose from "mongoose";

const homeHeroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    imageUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("HomeHero", homeHeroSchema);