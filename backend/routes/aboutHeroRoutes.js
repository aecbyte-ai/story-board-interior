import express from "express";
import { getAboutHero, addAboutHero, updateAboutHero } from "../controllers/aboutHeroController.js";

const router = express.Router();

router.get("/", getAboutHero); // GET /api/about-hero
router.post("/", addAboutHero); // POST /api/about-hero
router.put("/:id", updateAboutHero); // PUT /api/about-hero/:id

export default router;