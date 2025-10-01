import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    client: { type: String, required: true },
    project: { type: String }, // optional: project name or location
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
