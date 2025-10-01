import express from "express";
import { getVisionSection, addVisionSection, updateVisionSection } from "../controllers/visionController.js";

const router = express.Router();

router.get("/", getVisionSection);           // GET /api/vision
router.post("/", addVisionSection);          // POST /api/vision
router.put("/:id", updateVisionSection);     // PUT /api/vision/:id

export default router;
