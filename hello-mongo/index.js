const express = require('express');
const mongoose = require("mongoose");
const app = express();
const Router = require('./controller/routes')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/register',Router)


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
