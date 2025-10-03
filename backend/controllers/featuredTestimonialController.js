import FeaturedTestimonial from "../models/featuredTestimonialModel.js";

// Get Featured Testimonial
export const getFeaturedTestimonial = async (req, res) => {
  try {
    const testimonial = await FeaturedTestimonial.findOne();
    if (!testimonial) return res.status(404).json({ message: "No featured testimonial found" });
    res.json(testimonial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add Featured Testimonial
export const addFeaturedTestimonial = async (req, res) => {
  try {
    const newTestimonial = new FeaturedTestimonial(req.body);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Featured Testimonial
export const updateFeaturedTestimonial = async (req, res) => {
  const { id } = req.params; // get id from URL
  try {
    const updated = await FeaturedTestimonial.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Testimonial not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteFeaturedTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await FeaturedTestimonial.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Testimonial not found" });
    res.json({ message: "Testimonial deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
