import mongoose from "mongoose";
import Questions from "../models/Question.js";

// @ Answer added or update the question in db ------------------
export const postAnswer = async (req, res) => {
  // get id of the question form url
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered } = req.body;
  const userId = req.userId;

  //  Check weather the question present or not
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  //   Update the count of answer
  updateNoOfQuestions(_id, noOfAnswers);

  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json("error in updating");
  }
};

// @ Mechanism of update the number of answer ------------------
const updateNoOfQuestions = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noOfAnswers } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("Answer unavailable...");
  }
  updateNoOfQuestions(_id, noOfAnswers);
  try {
    await Questions.updateOne({ _id }, { $pull: { answer: { _id: answerId } } });
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(405).json(error);
  }
};
