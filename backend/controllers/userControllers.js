const User = require("../models/userModel");
const asynchnadler = require("express-async-handler");
const bcrypt = require("bcryptjs");
//@desc registerUser
//@route POST /api/users
//@access Public
const registerUser = asynchnadler(async (req, res) => {
  //   res.json({
  //     mesaage: "register user",
  //   });
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc LoginUser
//@route POST /api/users/login
//@access Public
const loginUser = asynchnadler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter email and password");
  }
  //Check for user email
  const user = await User.findOne({ email });
  //   console.log(userExists);
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      msg: "Logged in success",
      user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  res.json({
    mesaage: "login user",
  });
});

//@desc userData
//@route GET /api/users/me
//@access Public
const getMe = asynchnadler(async (req, res) => {
  res.json({
    mesaage: "user data dispaly",
  });
});
module.exports = { registerUser, loginUser, getMe };
