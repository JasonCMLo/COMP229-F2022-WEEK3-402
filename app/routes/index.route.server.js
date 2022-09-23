// Index Routes

import { Router } from "express";
import { helloWorld } from "../controllers/index.controller.server.js";

// add middleware to connect application

const router = Router();

router.use("/", helloWorld);
router.use("/hello", helloWorld);

export default router;
