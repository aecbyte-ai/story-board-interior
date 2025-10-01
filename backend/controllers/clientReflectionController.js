import ClientReflection from "../models/clientReflection.js";

// GET all reflections
export const getReflections = async (req, res) => {
  try {
    const reflections = await ClientReflection.find();
    res.json(reflections);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reflections", error });
  }
};

// POST - add new reflection
export const addReflection = async (req, res) => {
  try {
    const newReflection = new ClientReflection(req.body);
    await newReflection.save();
    res.status(201).json(newReflection);
  } catch (error) {
    res.status(400).json({ message: "Error adding reflection", error });
  }
};

