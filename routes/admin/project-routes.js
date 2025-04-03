const express = require("express");
const router = express.Router();

const {
  addProject,
  fetchAllProjects,
  editProject,
  deleteProject,
} = require("../../controller/admin/project-controller");

router.post("/add-project", addProject);
router.get("/get-projects", fetchAllProjects);
router.put("/edit/:id", editProject);
router.delete("/delete/:id", deleteProject);
module.exports = router;
