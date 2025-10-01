import express from "express";
import { getBrandLogos, createBrandLogo } from "../controllers/brandLogoController.js";

const router = express.Router();

router.get("/", getBrandLogos);
router.post("/", createBrandLogo); 

export default router;
