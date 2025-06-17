// utils/uploader.js
import __dirname from "./index.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "others";

    if (file.fieldname === "image") {
      folder = "pets";
    } else if (file.fieldname === "documents") {
      folder = "documents";
    }

    const dir = path.join(__dirname, "..", "public", folder);
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploader = multer({ storage });

export default uploader;
