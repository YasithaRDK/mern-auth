import express from "express";
import {
  test,
  deleteUser,
  updateUser,
} from "../controllers/user.controllers.js";
import { verifyToken } from "../utills/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
