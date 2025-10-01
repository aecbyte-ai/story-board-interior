

import express from "express";

import { addProject, getFeaturedProjects, getProjectById } from "../controllers/featuredProjectController.js";


const router = express.Router();

router.post("/", addProject);        // Add new project
router.get("/", getFeaturedProjects);        // Get all projects
router.get("/:id", getProjectById);  // Get single project by ID

export default router;
