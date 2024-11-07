import express from "express";

import { single, multiple } from "../middlewares/upload.middleware";

const router = express.Router();

router.post("/upload/single", single, (req, res) => {
    res.send("File uploaded successfully (single).");
});
router.post("/upload/multiple", multiple, (req, res) => {
    res.send("Files uploaded successfully (multiple).");
});

export default router;
