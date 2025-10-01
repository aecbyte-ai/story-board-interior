// controllers/CtaController.js
import Cta from "../models/cta.js";

// GET CTA
export const getCta = async (req, res) => {
  try {
    const cta = await Cta.findOne(); // assuming one CTA section
    res.json(cta);
  } catch (error) {
    res.status(500).json({ message: "Error fetching CTA", error });
  }
};

export const addCta = async (req, res) => {
  try {
    const cta = await Cta.create(req.body);
    res.status(201).json(cta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE CTA
export const updateCta = async (req, res) => {
  try {
    const updated = await Cta.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating CTA", error });
  }
};
