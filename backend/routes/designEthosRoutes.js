// routes/designEthosRoutes.js
import express from "express";
import { getDesignEthos, createDesignEthos } from "../controllers/designEthosController.js";

const router = express.Router();

router.get("/", getDesignEthos);
router.post("/", createDesignEthos); // useful for seeding from client (or use seed script)

export default router;
