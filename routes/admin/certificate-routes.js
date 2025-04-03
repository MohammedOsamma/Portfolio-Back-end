const express = require("express");
const router = express.Router();

const {
  addCertificate,
  fetchAllCert,
  editCertificate,
} = require("../../controller/admin/certificate-controller");

router.post("/add-cert", addCertificate);
router.get("/get-certs", fetchAllCert);
router.put("/edit/:id", editCertificate);

module.exports = router;
