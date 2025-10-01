import express from "express";
import { getSignatureProjects, createSignatureProject } from "../controllers/signatureProjectController.js";

const router = express.Router();

router.get("/", getSignatureProjects);
router.post("/", createSignatureProject); // optional: only if you want to add via API

export default router;
