import mongoose from "mongoose";
//need to update add array like 
const CommentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const comment = mongoose.model("comment", CommentSchema);

export default comment;
