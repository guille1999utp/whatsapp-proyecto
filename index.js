const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const port = 4000;
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.any());
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});