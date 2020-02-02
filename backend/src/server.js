require("dotenv");
const express = require("express");
const cors = require("cors");
class App {
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(cors());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
