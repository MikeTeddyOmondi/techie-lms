import express from "express";
import { uploadVideo } from "../utils/multer.js";
// import uploadVideo from "../utils/multer.js";
// import { dataUri } from "../utils/multer.js";
import { uploadMedia } from "../utils/cloudinary.js";

const router = express.Router();

router
  .route("/upload-video")
  .post(uploadVideo.single("file"), async (req, res) => {
    try {
      const uploadeResult = await uploadMedia(req.file.path);
      // const videoFile = dataUri(req).content;
      // const uploadeResult = await uploadMedia(videoFile);
      console.log({ uploadeResult });
      res.status(200).json({
        success: true,
        message: "File uploaded successfully.",
        data: uploadeResult,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error uploading file" });
    }
  });
export default router;
