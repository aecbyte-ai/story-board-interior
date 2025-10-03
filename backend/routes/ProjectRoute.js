import express from "express";
import { getProjects, addProject, getFeaturedProjects , updateProject, 
  deleteProject, 
  toggleVisibility , getAllProjectsAdmin} from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/", getProjects);            // GET /api/projects
router.post("/", addProject);            // POST /api/projects
router.get("/featured", getFeaturedProjects); // GET /api/projects/featured
router.put("/:id", updateProject);       // PUT /api/projects/:id
router.delete("/:id", deleteProject);    // DELETE /api/projects/:id
router.put("/:id/toggle-visibility", toggleVisibility); // optional
router.get("/admin", getAllProjectsAdmin);

export default router;
