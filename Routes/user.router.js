const express = require("express");
const { UserController } = require("../Controllers/user.controller.js");
const { verifyToken } = require("../Middleware/verifyToken.js");

const controller = new UserController();

const UserRouter = express.Router();

UserRouter.get("/users", verifyToken, (req, res) => {
  controller.list(req, res);
});

UserRouter.post("/users", (req, res) => {
  controller.create(req, res);
});

module.exports = { UserRouter };
