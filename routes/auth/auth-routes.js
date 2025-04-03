const express = require("express");
const {
  login,
  authMiddleware,
  logout,
} = require("../../controller/auth/auth-controller");
const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/check-auth", authMiddleware, () => {
  const user = req.user;
  res
    .status(200)
    .json({ success: true, message: "User is authenticated", user });
});
module.exports = router;
