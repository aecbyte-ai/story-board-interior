import express from "express";
import { getHomeHero } from "../controllers/homeHeroController.js";
import { createHomeHero } from "../controllers/homeHeroController.js";

const router = express.Router();
console.log("homeHeroRoutes loaded");
router.get("/", getHomeHero);
router.post("/", createHomeHero);

export default router;

