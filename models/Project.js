const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    skills: [{ type: String }],
    githubLink: String,
    demoLink: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
