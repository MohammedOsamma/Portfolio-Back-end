const jwt = require("jsonwebtoken");
const Admin = require("../../models/Admin");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const checkAdmin = await Admin.findOne({ userName });
    console.log(checkAdmin);

    if (!checkAdmin) {
      return res.json({
        success: false,
        message: "You are not an admin.",
      });
    }

    const checkPassword = await bcrypt.compare(password, checkAdmin.password);

    if (!checkPassword) {
      return res.json({
        success: false,
        message: "Password in Incorrect",
      });
    }

    const token = jwt.sign(
      {
        id: checkAdmin._id,
        userName: checkAdmin.userName,
        password: checkAdmin.password,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Login Successfully",
      admin: {
        userName: checkAdmin.userName,
        id: checkAdmin._id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

module.exports = {
  login,
};
