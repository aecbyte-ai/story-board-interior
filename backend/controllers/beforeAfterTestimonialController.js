import BeforeAfterTestimonial from "../models/beforeAfterTestimonialModel.js";

// Get all Before/After testimonials
export const getBeforeAfterTestimonials = async (req, res) => {
  try {
    const testimonials = await BeforeAfterTestimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new Before/After testimonial
export const addBeforeAfterTestimonial = async (req, res) => {
  try {
    const testimonial = new BeforeAfterTestimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
