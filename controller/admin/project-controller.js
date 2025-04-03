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
    const { id } = req.params;
    const { image, title, skills, codeLink, demoLink } = req.body;
    let findProject = await Project.findById(id);

    if (!findProject) {
      return res.status(404).json({
        success: false,
        message: "Project Not Found",
      });
    }

    findProject.image = image || findProject.image;
    findProject.title = title || findProject.title;
    findProject.skills = skills || findProject.skills;
    findProject.codeLink = codeLink || findProject.codeLink;
    findProject.demoLink = demoLink || findProject.demoLink;

    await findProject.save();
    res.status(200).json({
      success: true,
      data: findProject,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const findProject = await Project.findByIdAndDelete(id);

  if (!findProject) {
    return res.status(404).json({
      success: false,
      message: "Project Not Found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Project Deleted Successfully",
  });
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
