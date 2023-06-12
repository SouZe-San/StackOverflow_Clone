const mongoose = require("mongoose");
const app = require("express")();
const http = require("http").Server(app);

const uri =
  "mongodb+srv://soumyajitmondal:mongoData00base@clone-database.dhxhxa6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const User = require("./module/user");

http.listen(3000, () => {
  console.log("I am Running");
});
//   mongodb+srv://soumyajitmondal:<password>@clone-database.dhxhxa6.mongodb.net/?retryWrites=true&w=majority

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
