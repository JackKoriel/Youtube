import mongoose from "mongoos";

const CommentsSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    videoID: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("comment", CommentsSchema);
