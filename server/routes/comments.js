import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//add a comment
router.post("/", verifyToken, addComment);

//delete one comment
router.delete("/:id", verifyToken, deleteComment);

//get all video comments
router.get("/:videoId", verifyToken, getComments);

export default router;
