import express from "express";
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import {
  createuser,
  deleteuser,
  finduser,
  getuser,
  updateuser,
} from "../controller/users.js";

// import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// let users = [
//   {
//     name: "Ayushi",
//     lastname: "Gupta",
//     age: 21,
//   },
// ];
router.get("/", getuser);

router.post("/", createuser);

router.get("/:id", finduser);

router.delete("/:id", deleteuser);

router.patch("/:id", updateuser);

export default router;
