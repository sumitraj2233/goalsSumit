const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT_NUMBER || 3000;
app.listen(port, () => console.log(`Server running on port${port}`));
// app.get("/api/goals", (req, res) => {
//   res.status(200).json({
//     message: "goals fetched",
//   });
// });
app.use("/api/goals", require("./routes/goalRoutes"));
