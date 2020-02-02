require("dotenv");
module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  host: process.env.DB_HOST || "192.168.99.100",
  username: process.env.DB_USER || "admin",
  password: process.env.DB_PASS || "admin",
  database: process.env.DB_NAME || "handlepeople",
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
