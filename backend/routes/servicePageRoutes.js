import express from "express";
import { getServicePage, seedServicePage, updateServicePage } from "../controllers/servicePageController.js";

const router = express.Router();

router.get("/", getServicePage);
router.post("/seed", seedServicePage);  // send full JSON body
router.put("/", updateServicePage);

export default router;
