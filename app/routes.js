const express = require("express");
const routes = express.Router();

const PeopleController = require("./controllers/PeopleController");

routes.get("/", (req, res) => {
  return res.send("Server is running...");
});

routes.get("/peoples", PeopleController.allPeoples);

routes.post("/peoples/create", PeopleController.createPeople);

module.exports = routes;
