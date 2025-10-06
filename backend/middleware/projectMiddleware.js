// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import cloudinary from "../config/cloudinary.js";

// // Cloudinary storage config for Projects
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "projects",   // store under projects folder
//     allowed_formats: ["jpg", "png", "jpeg", "pdf"],
//   },
// });

// // Multer instance
// const upload = multer({ storage });

// // Middleware wrapper to return JSON errors instead of HTML
// const projectUpload = (req, res, next) => {
//   upload.single("image")(req, res, (err) => {
//     if (err) {
//       console.error("Project upload error:", err);
//       return res.status(400).json({
//         message: "Project file upload failed",
//         error: err.message || String(err),
//       });
//     }
//     next();
//   });
// };

// export default projectUpload; 

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "projects",  
    allowed_formats: ["jpg", "png", "jpeg", "pdf"],
  },
});

const upload = multer({ storage });

const projectUpload = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error("Project upload error:", err);
      return res.status(400).json({
        message: "Project file upload failed",
        error: err.message || String(err),
      });
    }
    next();
  });
};

export default projectUpload;

