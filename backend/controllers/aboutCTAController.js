import AboutCTA from "../models/AboutCTA.js";

// Get CTA
export const getAboutCTA = async (req, res) => {
  try {
    const cta = await AboutCTA.findOne();
    res.status(200).json(cta);
  } catch (error) {
    res.status(500).json({ message: "Error fetching CTA", error });
  }
};

// Create/Update CTA
export const createOrUpdateCTA = async (req, res) => {
  try {
    let cta = await AboutCTA.findOne();
    if (cta) {
      cta.heading = req.body.heading;
      cta.buttonText = req.body.buttonText;
      cta.buttonLink = req.body.buttonLink;
      cta.backgroundImage = req.body.backgroundImage;
      await cta.save();
    } else {
      cta = new AboutCTA(req.body);
      await cta.save();
    }
    res.status(201).json(cta);
  } catch (error) {
    res.status(500).json({ message: "Error saving CTA", error });
  }
};
