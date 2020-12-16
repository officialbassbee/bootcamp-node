const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.send("Your account was created successfully. You may now login.");
    })
    .catch((err) => console.log(err));
});

app.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.send("Your account was created successfully. You may now login.");
    })
    .catch((err) => console.log(err));
});

mongoose.connect("mongodb://localhost/authsystem", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");

    app.listen(3001, () => {
      console.log("Listening on port 3001");
    });
  })
  .on("error", function (err) {
    console.log("Database connection error:", err);
    process.exit(1);
  });
