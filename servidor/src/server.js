const connectToDataBase = require("./database/connect");
const dotenv = require("dotenv"); // .env deixa seguro a senha da conexão com banco de dados

const express = require("express");
const cors = require("cors")
const routes = require("./routes")

const app = express();
dotenv.config();

const PORT = 3333;

app.use(cors());
app.use(express.json());
app.use(routes)

connectToDataBase();

//inicia servidor
app.listen(PORT, () => {console.log("server on fire 🔥")});