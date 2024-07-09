// routes/job.route.js
import express from "express";
import { getJob } from "../controller/job.controller.js";

const router = express.Router();

router.get("/", getJob);

export default router;
