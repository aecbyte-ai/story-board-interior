import express from "express";
import { getFeaturedTestimonial, addFeaturedTestimonial, updateFeaturedTestimonial } 
from "../controllers/featuredTestimonialController.js";

const router = express.Router();

router.get("/", getFeaturedTestimonial);
router.post("/", addFeaturedTestimonial);
router.put("/", updateFeaturedTestimonial);

export default router;
