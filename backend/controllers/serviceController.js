import Service from "../models/Service.js";

// GET all services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    console.error("getServices error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST new service (admin use)
export const createService = async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    const service = await Service.create({ title, description, icon });
    res.status(201).json(service);
  } catch (err) {
    console.error("createService error:", err);
    res.status(500).json({ message: "Failed to create service" });
  }
};
