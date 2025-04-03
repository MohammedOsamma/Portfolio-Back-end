const express = require("express");
const router = express.Router();

const { addProject } = require("../../controller/admin/project-controller");

router.post("/add-project", addProject);

module.exports = router;
