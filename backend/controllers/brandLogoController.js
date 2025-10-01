import BrandLogo from "../models/BrandLogo.js";

// GET all brand logos
export const getBrandLogos = async (req, res) => {
  try {
    const logos = await BrandLogo.find().sort({ createdAt: 1 });
    res.status(200).json(logos);
  } catch (err) {
    console.error("getBrandLogos error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST new brand logo (admin use)
export const createBrandLogo = async (req, res) => {
  try {
    const { image, name, link } = req.body;
    const logo = await BrandLogo.create({ image, name, link });
    res.status(201).json(logo);
  } catch (err) {
    console.error("createBrandLogo error:", err);
    res.status(500).json({ message: "Failed to create brand logo" });
  }
};
