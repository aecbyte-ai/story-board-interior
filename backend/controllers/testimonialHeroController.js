import TestimonialHero from "../models/TestimonialHero.js";

// Add new Hero Section
export const addTestimonialHero = async (req, res) => {
  try {
    const hero = await TestimonialHero.create(req.body);
    res.status(201).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Hero Section (only one expected)
export const getTestimonialHero = async (_req, res) => {
  try {
    const hero = await TestimonialHero.findOne();
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Hero Section
export const updateTestimonialHero = async (req, res) => {
  try {
    const hero = await TestimonialHero.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
