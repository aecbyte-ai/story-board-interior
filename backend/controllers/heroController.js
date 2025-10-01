import Hero from "../models/Hero.js";

// GET hero section
export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne(); // only one hero section
    if (!hero) return res.status(404).json({ message: "Hero section not found" });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST hero section (Admin only - create new)
export const createHero = async (req, res) => {
  try {
    const hero = new Hero(req.body);
    const savedHero = await hero.save();
    res.status(201).json(savedHero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT hero section (update)
export const updateHero = async (req, res) => {
  try {
    const updatedHero = await Hero.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true, // creates one if it doesn't exist
    });
    res.json(updatedHero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
