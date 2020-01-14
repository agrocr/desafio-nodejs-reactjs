const express = require("express");
const bodyParser = require("body-parser");

//inicia o express
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//todos os tipo de requisições são redirecionados para o arquivos de rotas
app.use("/api", require("./app/routes"));

//Servidor irá ficar "ouvindo" a porta 3000
app.listen(3000);

console.log("Server is running...");
