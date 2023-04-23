import express from "express";
import {
  addUser,
  getUserByID,
  getAllUsers,
} from "../controllers/userController";

const router = express.Router();

router.get("/getUser/:id", getUserByID);
router.get("/users", getAllUsers);
router.post("/addUser", addUser);

export { router };
