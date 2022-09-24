// Index Routes

import { Router } from "express";
import {
  displayContact,
  displayProjects,
  displayServices,
  displayHome,
} from "../controllers/index.controller.server.js";
import { displayAbout } from "../controllers/index.controller.server.js";

// add middleware to connect application

const router = Router();

router.get("/", displayHome);
router.use("/home", displayHome);
router.use("/about", displayAbout);
router.get("/projects", displayProjects);

router.use("/services", displayServices);

router.use("/contact", displayContact);

export default router;
