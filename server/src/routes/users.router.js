const express = require("express");

const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/signup", usersController.createNewUser);
usersRouter.get("/", usersController.getAllUsers);

module.exports = usersRouter;
