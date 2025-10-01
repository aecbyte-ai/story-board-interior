import express from "express";
import { getTestimonials, createTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", getTestimonials);
router.post("/", createTestimonial); // optional for admin

export default router;
