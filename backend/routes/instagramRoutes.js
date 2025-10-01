import express from "express";
import { getInstagramPosts, createInstagramPost } from "../controllers/instagramController.js";

const router = express.Router();

router.get("/", getInstagramPosts);
router.post("/", createInstagramPost); // optional, admin use

export default router;
