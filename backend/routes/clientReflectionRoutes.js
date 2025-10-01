import express from "express";
import { getReflections, addReflection } from "../controllers/clientReflectionController.js";

const router = express.Router();

router.get("/", getReflections);   // GET /api/client-reflections
router.post("/", addReflection);   // POST /api/client-reflections

export default router;
