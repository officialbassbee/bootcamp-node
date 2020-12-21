const express = require('express');
const Router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose');

Router.post("/", (req, res) => {
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

  Router.post("/", (req, res) => {
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
  
  


module.exports = Router;