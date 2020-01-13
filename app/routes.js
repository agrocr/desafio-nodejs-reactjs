const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  return res.send("Serve is running...");
});

routes.get("/users", UserController.allUsers);

routes.post("/users/create", UserController.createUser);

module.exports = routes;
