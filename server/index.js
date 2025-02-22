import express from "express";
import api from "./src/routes/api.js";

const app = express();

app.use(express.json());
app.use("/api", api);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, console.log("Servidor Ligado!"));
