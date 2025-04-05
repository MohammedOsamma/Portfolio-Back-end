const express = require("express");
const router = express.Router();

const {
  addCertificate,
  fetchAllCert,
  editCertificate,
  deleteCertificate,
} = require("../../controller/admin/certificate-controller");
const handleImageUpload = require("../../controller/admin/upload-image");
const { upload } = require("../../helper/cloudinary");

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add-cert", addCertificate);
router.get("/get-certs", fetchAllCert);
router.put("/edit/:id", editCertificate);
router.delete("/delete/:id", deleteCertificate);

module.exports = router;
