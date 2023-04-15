const express = require("express");
const { protect } = require("../middleware/authMiddleWare");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
