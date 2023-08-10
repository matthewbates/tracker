const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/users.router");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/signup", usersRouter);

module.exports = app;
