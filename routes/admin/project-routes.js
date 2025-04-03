const express = require("express");
const router = express.Router();

const {
  addProject,
  fetchAllProjects,
  editProject,
} = require("../../controller/admin/project-controller");

router.post("/add-project", addProject);
router.get("/get-projects", fetchAllProjects);
router.put("/edit/:id", editProject);

module.exports = router;
