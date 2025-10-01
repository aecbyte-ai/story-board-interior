import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);


export default mongoose.model("FeaturedProject", ProjectSchema);
