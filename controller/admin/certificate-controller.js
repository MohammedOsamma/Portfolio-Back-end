const Certificate = require("../../models/Certificate");

const addCertificate = async (req, res) => {
  try {
    const { image, name } = req.body;
    const newCert = new Certificate({
      image,
      name,
    });

    await newCert.save();
    res.status(200).json({
      success: true,
      data: newCert,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const fetchAllCert = async (req, res) => {
  try {
    const certificateList = await Certificate.find({});

    res.status(200).json({
      success: true,
      data: certificateList,
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
  addCertificate,
  fetchAllCert,
};
