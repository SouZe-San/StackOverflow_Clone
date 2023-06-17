import mongoose from "mongoose";

// Import Module
import users from "../models/auth.js";

// get all details of user from db
export const getAllUsers = async (req, res) => {
  try {
    // get all user
    const allUsers = await users.find();
    // empty array for collect all details
    const allUserDetails = [];
    allUsers.forEach((user) => {
      allUserDetails.push({
        _id: user._id,
        name: user.name,
        about: user.about,
        tags: user.tags,
        joinedOn: user.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
