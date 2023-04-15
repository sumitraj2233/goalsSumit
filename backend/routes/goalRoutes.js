const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");
const { protect } = require("../middleware/authMiddleWare");
// router.get("/", (req, res) => {
//   res.json({
//     messgae: "get goals",
//   });
// });

// Instead of writing "/" two times we can use router.route
// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);
module.exports = router;
