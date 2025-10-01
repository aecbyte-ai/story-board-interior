import express from "express";
import { getBeforeAfterTestimonials, addBeforeAfterTestimonial } from "../controllers/beforeAfterTestimonialController.js";

const router = express.Router();

router.get("/", getBeforeAfterTestimonials);
router.post("/", addBeforeAfterTestimonial);

export default router;
