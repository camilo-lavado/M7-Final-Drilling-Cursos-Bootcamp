import { Router } from "express";
import bootcampsController from "../controllers/bootcamps.controller.js";

// desectructuramos el método del controlador
const { getBootcamps, createBootcamp, deleteBootcampById, findById, addUser } =
  bootcampsController;

const router = Router();

router.get("/bootcamps", getBootcamps);
router.post("/bootcamps", createBootcamp);
router.put("/bootcamps/:id", createBootcamp);
router.post("/bootcamps/:id/users", addUser);
router.delete("/bootcamps/:id", deleteBootcampById);
router.get("/bootcamps/:id", findById);

export default router;
