import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trend,
  random,
  sub,
  search,
  getByTag,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);

//update a video
router.put("/:id", verifyToken, updateVideo);

//increment views
router.put("/view/:id", addView);

//delete a video
router.delete("/:id", verifyToken, deleteVideo);

//find a video
router.get("/find/:id", getVideo);

//show trendy videos
router.get("/trend", trend);

//get random videos
router.get("/random", random);

//find videos from channels subscribed to
router.get("/sub", verifyToken, sub);

//find a by tag video
router.get("/tags", getByTag);

//find a video with search
router.get("/search", search);

export default router;
