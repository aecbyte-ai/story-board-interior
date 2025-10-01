
import DesignEthos from "../models/DesignEthos.js";

export const getDesignEthos = async (req, res) => {
  try {
    // return all items ordered by `order` asc
    const items = await DesignEthos.find().sort({ order: 1 });
    res.status(200).json(items);
    
  } catch (err) {
    console.error("getDesignEthos:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createDesignEthos = async (req, res) => {
  try {
    const { title, subtitle, description, imageUrl, order } = req.body;
    const newItem = await DesignEthos.create({ title, subtitle, description, imageUrl, order });
    res.status(201).json(newItem);
  } catch (err) {
    console.error("createDesignEthos:", err);
    res.status(500).json({ message: "Server error" });
  }
};

