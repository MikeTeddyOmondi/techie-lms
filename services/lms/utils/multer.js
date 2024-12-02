import path from "path";
import multer from "multer";
import DatauriParser from "datauri/parser.js";

const storage = multer.memoryStorage();

export const uploadVideo = multer({dest:"uploads/"});

const upload = multer({ storage: storage });

const dataUriParser = new DatauriParser();

/**
 * @description This function converts the buffer to data url
 * @param {Object} req containing the field object
 * @returns {String} The data url from the string buffer
 */
export const dataUri = (req) =>
  dataUriParser.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );

export default upload;
