import express from "express";
import {
  getHomeHero,
  createHomeHero,
  updateHomeHero,
  setActiveHomeHero,
  getAllHomeHeroes,
} from "../controllers/homeHeroController.js";

const router = express.Router();

// Get active hero (for frontend)
router.get("/", getHomeHero);

// Get all heroes (for admin list)
router.get("/all", getAllHomeHeroes);

// Create new hero
router.post("/", createHomeHero);

// Update existing hero
router.put("/:id", updateHomeHero);

// Set hero active
router.patch("/:id/active", setActiveHomeHero);

export default router;


