const express = require("express");
const router = express.Router();

const {
  addProject,
  fetchAllProjects,
} = require("../../controller/admin/project-controller");

router.post("/add-project", addProject);
router.get("/get-projects", fetchAllProjects);

module.exports = router;
