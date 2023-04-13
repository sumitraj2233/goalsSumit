const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { connectDB } = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleWare");
const app = express();
const port = process.env.PORT_NUMBER || 3000;
connectDB();
app.listen(port, () => console.log(`Server running on port${port}`));
// app.get("/api/goals", (req, res) => {
//   res.status(200).json({
//     message: "goals fetched",
//   });
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
