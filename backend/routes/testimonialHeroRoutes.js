import express from "express";
import {
  addTestimonialHero,
  getTestimonialHero,
  updateTestimonialHero,
} from "../controllers/testimonialHeroController.js";

const router = express.Router();

router.get("/", getTestimonialHero);   // GET /api/testimonial-hero
router.post("/", addTestimonialHero); // POST /api/testimonial-hero
router.put("/", updateTestimonialHero); // PUT /api/testimonial-hero

export default router;
