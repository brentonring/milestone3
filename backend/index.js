// Modules and Globals
require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONTROLLERS AND ROUTES
app.use("/users", require("./controllers/users"));

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
