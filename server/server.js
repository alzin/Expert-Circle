require("dotenv").config();

const express = require("express");
const app = express();
const container = require("./container");

const articleDataController = container.resolve("articleDataController");
const editController = container.resolve("editController");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/ask", articleDataController.ask.bind(articleDataController));
app.post("/edit", editController.edit.bind(editController));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
