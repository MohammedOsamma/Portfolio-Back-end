const express = require("express");
const router = express.Router();

const {
  addCertificate,
  fetchAllCert,
} = require("../../controller/admin/certificate-controller");

router.post("/add-cert", addCertificate);
router.get("/get-certs", fetchAllCert);

module.exports = router;
