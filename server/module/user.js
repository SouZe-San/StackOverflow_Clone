const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", UserModel);