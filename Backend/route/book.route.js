import express from "express";
import multer from "multer";
import { getBook, uploadBook } from "../controller/book.controller.js";

const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Set the directory where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Create a unique filename
  },
});

const upload = multer({ storage: storage });

router.post("/newbook", upload.single("image"), uploadBook);

router.get("/getbooks", getBook);

export default router;
