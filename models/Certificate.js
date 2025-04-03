const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    certLink: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Certificate", certificateSchema);
