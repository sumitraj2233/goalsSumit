const asynchnadler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc GetGoals
//@route GET /api/goals
//@access Private
const getGoals = asynchnadler(async (req, res) => {
  const goals = await Goal.find();
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
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc DeleteGoal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asynchnadler(async (req, res) => {
  const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  if (!deletedGoal) {
    throw new Error("Goal not found");
  }
  res.status(200).json(`deleted goal of id ${req.params.id}`);
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
