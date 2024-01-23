import Comment from "../model/comment.js";

export const newComment = async (request, response) => {
  try {
    const comment = await new Comment(request.body);
    comment.save();

    response.status(200).json("Comment saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getComments = async (request, response) => {
  try {
    const comments = await Comment.find({ postId: request.params.id });

    response.status(200).json(comments);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "comments deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while Deleting Post",
      error,
    });
  }
};
