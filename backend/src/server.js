require("dotenv");
const express = require("express");

class App {
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(express.json());
  }
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
