const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`Bienvenido a mi servidor en AWS, esta corriendo en el puerto ${port}`);
});

app.get("/:name", (req, res) => {
  res.send(`Hola ${req.params.name}`);
});
