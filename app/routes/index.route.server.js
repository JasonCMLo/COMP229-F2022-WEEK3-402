// Index Routes

import { Router } from "express";
import {
  displayContact,
  displayProjects,
  displayServices,
  helloWorld,
} from "../controllers/index.controller.server.js";
import { displayAbout } from "../controllers/index.controller.server.js";

// add middleware to connect application

const router = Router();

router.get("/", helloWorld);
router.use("/hello", helloWorld);
router.use("/about", displayAbout);
router.get("/projects", displayProjects);

router.use("/services", displayServices);

router.use("/contact", displayContact);

export default router;
