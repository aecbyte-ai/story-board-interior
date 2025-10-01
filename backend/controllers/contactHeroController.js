import Hero from "../models/ContactHero.js";

// Get hero data
export const getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne().sort({ createdAt: -1 });
    res.json(hero);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create or update hero data
export const createOrUpdateHero = async (req, res) => {
  try {
    const { title, description, backgroundImage } = req.body;

    // Optional: update if already exists
    let hero = await Hero.findOne();
    if (hero) {
      hero.title = title;
      hero.description = description;
      hero.backgroundImage = backgroundImage;
    } else {
      hero = new Hero({ title, description, backgroundImage });
    }

    await hero.save();
    res.status(201).json({ success: true, message: "Hero data saved", hero });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
