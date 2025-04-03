const express = require("express");
const router = express.Router();

const {
  addCertificate,
} = require("../../controller/admin/certificate-controller");

router.post("/add-cert", addCertificate);

module.exports = router;
