const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
