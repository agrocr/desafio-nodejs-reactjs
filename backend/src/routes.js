const express = require("express");
const routes = express.Router();
const PeopleController = require("./app/controllers/PeopleController");
const FieldValidate = require("./app/middlewares/FieldValidateMiddleware");
const PeopleJoi = require("./app/middlewares/PeopleJoi");

routes.get("/", (req, res) => {
  res.json({ message: "Welcome to the People API" });
});

routes.get("/people", PeopleController.index);
routes.get("/people/:id", PeopleController.show);
routes.post("/people", FieldValidate(PeopleJoi.body), PeopleController.store);
routes.put(
  "/people/:id",
  FieldValidate(PeopleJoi.body),
  PeopleController.update
);
routes.delete("/people/:id", PeopleController.destroy);

module.exports = routes;
