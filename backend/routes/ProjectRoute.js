import express from "express";
import { getProjects, addProject, getFeaturedProjects } from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/", getProjects);            // GET /api/projects
router.post("/", addProject);            // POST /api/projects
router.get("/featured", getFeaturedProjects); // GET /api/projects/featured

export default router;
