import express from "express";
import { getHero, createOrUpdateHero } from "../controllers/contactHeroController.js";

const router = express.Router();

router.get("/", getHero);              // Get hero data
router.post("/", createOrUpdateHero);  // Add or update hero data

export default router;
