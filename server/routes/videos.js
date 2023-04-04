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

router.put("/:id", verifyToken, updateVideo);

router.put("/view/:id", addView);

router.delete("/:id", verifyToken, deleteVideo);

router.get("/find/:id", getVideo);

router.get("/trend", trend);

router.get("/random", random);

router.get("/sub", verifyToken, sub);

router.get("/tags", getByTag);

router.get("/search", search);

export default router;
