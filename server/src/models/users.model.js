const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  confirmPassword: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);
