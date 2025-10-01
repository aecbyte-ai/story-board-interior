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