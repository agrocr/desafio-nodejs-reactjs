const express = require("express");
const routes = express.Router();

const PeopleController = require("./controllers/PeopleController");

routes.get("/", (req, res) => {
  return res.send("Server is running...");
});

routes.get("/peoples", PeopleController.allPeoples);

routes.get("/peoples/:id", PeopleController.findOnePeople);

routes.post("/peoples/create", PeopleController.createPeople);

routes.put("/peoples/update/:id", PeopleController.updatePeople);
/*
routes.post("/peoples/delete", PeopleController.deletePeople); */

module.exports = routes;
