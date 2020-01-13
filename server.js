const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./app/routes"));

app.listen(3000);
