import express from "express";
import { getHero, createHero, updateHero } from "../controllers/heroController.js";

const router = express.Router();

// GET /api/hero
router.get("/", getHero);

// POST /api/hero (add new hero section)
router.post("/", createHero);

// PUT /api/hero (update hero section)
router.put("/", updateHero);

export default router;
