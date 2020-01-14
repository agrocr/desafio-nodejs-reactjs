const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  return res.send("Serve is running...");
});

routes.get("/peoples", UserController.allPeoples);

routes.post("/peoples/create", UserController.createUser);

module.exports = routes;
