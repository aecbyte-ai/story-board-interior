import express from "express";
import { getFeaturedTestimonial, addFeaturedTestimonial, updateFeaturedTestimonial , deleteFeaturedTestimonial } 
from "../controllers/featuredTestimonialController.js";

const router = express.Router();

router.get("/", getFeaturedTestimonial);
router.post("/", addFeaturedTestimonial);
router.put("/:id", updateFeaturedTestimonial);
router.delete("/:id", deleteFeaturedTestimonial);

export default router;
