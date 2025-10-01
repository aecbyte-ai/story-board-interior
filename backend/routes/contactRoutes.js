// routes/contactRoutes.js
import express from "express";
import { createContact, getContacts , getStudios , addStudio} from "../controllers/contactController.js";
import { upload } from "../middleware/upload.js";



const router = express.Router();

router.get('/studios', getStudios);
router.post('/studios', addStudio);



router.post("/", upload.single("file"), createContact);
router.get("/", getContacts);    // admin fetch enquiries

export default router;
