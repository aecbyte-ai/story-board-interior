import ServicePage from "../models/ServicePage.js";

// Get service page
export const getServicePage = async (req, res) => {
  try {
    const page = await ServicePage.findOne();
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Seed / Create service page with dynamic data from body
export const seedServicePage = async (req, res) => {
  try {
    await ServicePage.deleteMany(); // reset collection

    const newPage = new ServicePage(req.body); // take full object from body

    await newPage.save();
    res.json(newPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update service page dynamically
export const updateServicePage = async (req, res) => {
  try {
    const page = await ServicePage.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
