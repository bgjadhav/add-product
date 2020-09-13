const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();


route.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  console.log(req);
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('user', ['firstName', 'lastName']);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = route;
