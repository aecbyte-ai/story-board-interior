import SignatureProject from "../models/SignatureProject.js";

// GET all signature projects
export const getSignatureProjects = async (req, res) => {
  try {
    const projects = await SignatureProject.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST new signature project (admin use)
export const createSignatureProject = async (req, res) => {
  try {
    const { title, description, image, link } = req.body;
    const newProject = new SignatureProject({ title, description, image, link });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create project" });
  }
};
