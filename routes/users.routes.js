import { Router } from "express";
import userController from "../controllers/users.controller.js";

// desectructuramos el método del controlador

const { createUser, findUserById, findAll, updateUserById, deleteUserById } =
  userController;

const router = Router();
router.get("/users", findAll);
router.post("/users", createUser);
router.get("/users/:id", findUserById);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;
