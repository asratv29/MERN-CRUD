const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserModel = require("./models/Users");
mongoose.connect("mongodb://localhost:27017/users");

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("successfully database is connected");
});
connection.on("error", () => {
  console.log("error to db");

  process.exit();
});

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("server is running");
});

app.get("/", (req, res) => {
  UserModel.find({})
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/create", (req, res) => {
  const { body } = req;
  console.log(req);

  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.json(error));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, phone: req.body.phone }
  )
    .then((result) => {
      res.json(result);
      console.log("user updated");
    })
    .catch((error) => {
      res.json(error);
      console.log("failed to update user");
    });
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((result) => console.log("User Deleted"))
    .catch((error) => console.log("failed to delete user"));
});
