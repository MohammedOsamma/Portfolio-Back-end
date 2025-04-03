const Project = require("../../models/Project");

const addProject = async (req, res) => {
  try {
    const { image, title, skills, codeLink, demoLink } = req.body;
    const newProject = new Project({
      image,
      title,
      skills,
      codeLink,
      demoLink,
    });

    await newProject.save();
    res.status(200).json({
      success: true,
      data: newProject,
    });

    console.log(newProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const fetchAllProjects = async (req, res) => {
  try {
    const projectList = await Project.find({});
    res.status(200).json({
      success: true,
      data: projectList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const editProject = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const deleteProject = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

module.exports = {
  addProject,
  fetchAllProjects,
  editProject,
  deleteProject,
};
