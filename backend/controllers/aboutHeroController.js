import AboutHero from "../models/AboutHero.js";

// GET hero section
export const getAboutHero = async (_req, res) => {
  try {
    const hero = await AboutHero.findOne();
    res.status(200).json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD hero section
export const addAboutHero = async (req, res) => {
  try {
    const hero = await AboutHero.create(req.body);
    res.status(201).json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE hero section
export const updateAboutHero = async (req, res) => {
  try {
    const hero = await AboutHero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
