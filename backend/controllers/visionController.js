import VisionSection from "../models/VisionSection.js";

// GET Vision Section
export const getVisionSection = async (_req, res) => {
  try {
    const section = await VisionSection.findOne();
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST Vision Section
export const addVisionSection = async (req, res) => {
  try {
    const section = await VisionSection.create(req.body);
    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT Vision Section
export const updateVisionSection = async (req, res) => {
  try {
    const section = await VisionSection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
