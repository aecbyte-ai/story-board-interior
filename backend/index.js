import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import projectRoutes from "./routes/ProjectRoute.js";
import heroRoutes from "./routes/heroRoutes.js";
import ctaRoutes from "./routes/ctaRoutes.js";
import homeHeroRoutes from "./routes/homeHeroRoutes.js";
import designEthosRoutes from "./routes/designEthosRoutes.js";
import signatureProjectRoutes from "./routes/signatureProjectRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import instagramRoutes from "./routes/instagramRoutes.js";
import brandLogoRoutes from "./routes/brandLogoRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";
import featuredProjectRoutes from "./routes/FeaturedProjectRoutes.js";
import testimonialHeroRoutes from "./routes/testimonialHeroRoutes.js";
import featuredTestimonialRoutes from "./routes/featuredTestimonialRoutes.js";
import beforeAfterTestimonialRoutes from "./routes/beforeAfterTestimonialRoutes.js";
import clientReflectionRoutes from "./routes/clientReflectionRoutes.js";
import clientStoryRoutes from "./routes/clientStoryRoutes.js";
import clientCommunityRoutes from "./routes/clientCommunityRoutes.js";
import aboutHeroRoutes from "./routes/aboutHeroRoutes.js";
import aboutStudioRoutes from "./routes/aboutStudioRoutes.js";
import visionRoutes from "./routes/visionRoutes.js";
import whatWeDoRoutes from "./routes/whatWeDoRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import aboutCTARoutes from "./routes/aboutCTARoutes.js";
import servicePageRoutes from "./routes/servicePageRoutes.js"
import contactRoutes from "./routes/contactRoutes.js";
import contactHeroRoutes from "./routes/contactHeroRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
console.log("✅ homeHeroRoutes registered at /api/home-hero");
// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/cta", ctaRoutes);
app.use("/api/home-hero", homeHeroRoutes);
app.use("/api/design-ethos", designEthosRoutes);
app.use("/api/signature-projects", signatureProjectRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/instagram", instagramRoutes);
app.use("/api/brands", brandLogoRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/featuredprojects", featuredProjectRoutes);
app.use("/api/testimonial-hero", testimonialHeroRoutes);
app.use("/api/featured-testimonial", featuredTestimonialRoutes);
app.use("/api/before-after-testimonials", beforeAfterTestimonialRoutes);
app.use("/api/client-reflections", clientReflectionRoutes);
app.use("/api/client-stories", clientStoryRoutes);
app.use("/api/client-community", clientCommunityRoutes);
app.use("/api/about-hero", aboutHeroRoutes);
app.use("/api/about-studio", aboutStudioRoutes);
app.use("/api/vision", visionRoutes);
app.use("/api/what-we-do", whatWeDoRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/about-cta", aboutCTARoutes);
app.use("/api/servicepage" , servicePageRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/hero", contactHeroRoutes);
// MongoDB connection
mongoose.connect("mongodb+srv://skyisnotmylimitdev:Qwerty%401234@cluster0.5nd3pca.mongodb.net/interiorDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
