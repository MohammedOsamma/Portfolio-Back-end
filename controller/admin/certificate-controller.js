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

const editCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, name } = req.body;
    let findCert = await Certificate.findById(id);

    if (!findCert) {
      return res.status(404).json({
        success: false,
        message: "Certificate not Found!",
      });
    }

    findCert.image = image || findCert.image;
    findCert.name = name || findCert.name;

    await findCert.save();

    res.status(200).json({
      success: true,
      data: findCert,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const findCert = await Certificate.findByIdAndDelete(id);

    if (!findCert) {
      return res.status(404).json({
        success: false,
        message: "Certificate not Found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Certificate Deleted Successfully!",
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
  editCertificate,
  deleteCertificate,
};
