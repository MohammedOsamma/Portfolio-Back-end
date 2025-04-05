const express = require("express");
const router = express.Router();

const {
  addProject,
  fetchAllProjects,
  editProject,
  deleteProject,
} = require("../../controller/admin/project-controller");
const handleImageUpload = require("../../controller/admin/upload-image");
const { upload } = require("../../helper/cloudinary");

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add-project", addProject);
router.get("/get-projects", fetchAllProjects);
router.put("/edit/:id", editProject);
router.delete("/delete/:id", deleteProject);
module.exports = router;
