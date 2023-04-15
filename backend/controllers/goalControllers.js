const asynchnadler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

//@desc GetGoals
//@route GET /api/goals
//@access Private
const getGoals = asynchnadler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json({
    goals,
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
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json({
    goal,
  });
});

//@desc updateGoal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asynchnadler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  //Check for user
  if (!user) {
    res.status(401);
    throw new error("user not found");
  }
  //make sure the login user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc DeleteGoal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asynchnadler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }
  await Goal.findByIdAndRemove(req.params.id);
  res.status(200).json({ id: req.params.id });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
