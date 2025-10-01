// routes/ctaRoutes.js
import express from "express";
import { getCta, updateCta , addCta } from "../controllers/ctaController.js";

const router = express.Router();

router.get("/", getCta);         // GET /api/cta
router.put("/", updateCta);     // PUT /api/cta
router.post("/", addCta);

export default router;
