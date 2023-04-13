const asynchnadler = require("express-async-handler");

//@desc GetGoals
//@route GET /api/goals
//@access Private
const getGoals = asynchnadler(async (req, res) => {
  res.status(200).json({
    messsage: "grt goals",
  });
});

//@desc setGoals
//@route POST /api/goals
//@access Private
const setGoal = asynchnadler(async (req, res) => {
  // console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    messsage: "set goal",
  });
});

//@desc updateGoal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asynchnadler(async (req, res) => {
  res.status(200).json({
    messsage: `update goal ${req.params.id}`,
  });
});

//@desc DeleteGoal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asynchnadler(async (req, res) => {
  res.status(200).json({
    messsage: `delete goal ${req.params.id}`,
  });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
