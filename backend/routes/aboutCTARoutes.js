import express from "express";
import { getAboutCTA, createOrUpdateCTA } from "../controllers/aboutCTAController.js";

const router = express.Router();

router.get("/", getAboutCTA);
router.post("/", createOrUpdateCTA);

export default router;
