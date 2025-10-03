import HomeHero from "../models/HomeHero.js";

export const getHomeHero = async (req, res) => {
  try {
    const hero = await HomeHero.findOne();
    if (!hero) {
      return res.status(404).json({ message: "Home hero not found" });
    }
    res.status(200).json(hero);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};




// Get all heroes (for admin)
export const getAllHomeHeroes = async (req, res) => {
  try {
    const heroes = await HomeHero.find();
    res.json(heroes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST - Create hero section
export const createHomeHero = async (req, res) => {
  try {
    const { title, subtitle, imageUrl, scrollText, scrollIconUrl , description} = req.body;

    if (!title || !subtitle || !imageUrl) {
      return res.status(400).json({ message: "Title, subtitle and imageUrl are required" });
    }

    const newHero = new HomeHero({
      title,
      subtitle,
      imageUrl,
      scrollText,
      scrollIconUrl,
      description
    });

    await newHero.save();
    res.status(201).json(newHero);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while creating hero section" });
  }
};

// Update
export const updateHomeHero = async (req, res) => {
  try {
    const hero = await HomeHero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Set active
export const setActiveHomeHero = async (req, res) => {
  try {
    await HomeHero.updateMany({}, { isActive: false });
    const hero = await HomeHero.findByIdAndUpdate(
      req.params.id,
      { isActive: true },
      { new: true }
    );
    res.json(hero);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};