const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

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
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);
module.exports = router;
