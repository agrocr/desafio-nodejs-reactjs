const express = require("express");
const routes = express.Router();

const PeopleController = require("./controllers/PeopleController");

routes.get("/", (req, res) => {
  return res.send("Server is running...");
});

routes.get("/people", PeopleController.allPeoples);

routes.get("/people/:id", PeopleController.findOnePeople);

routes.post("/people/create", PeopleController.createPeople);

routes.put("/people/update/:id", PeopleController.updatePeople);

routes.delete("/people/delete/:id", PeopleController.deleteOnePeople);

module.exports = routes;
