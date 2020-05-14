const express = require("express");

const User = require("../Models/User");

const router = new express.Router();

module.exports = router;

//signup
router.post("/user/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

//login
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();

    // console.log(token)
    res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
