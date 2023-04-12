//@desc GetGoals
//@route GET /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({
    messsage: "grt goals",
  });
};

//@desc setGoals
//@route POST /api/goals
//@access Private
const setGoal = (req, res) => {
  res.status(200).json({
    messsage: "set goal",
  });
};

//@desc updateGoal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({
    messsage: `update goal ${req.params.id}`,
  });
};

//@desc DeleteGoal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({
    messsage: `delete goal ${req.params.id}`,
  });
};
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
