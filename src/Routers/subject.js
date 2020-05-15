const express = require("express");

const Subject = require("../Models/subject");

const router = new express.Router();
const { auth, auth2 } = require("../Middlewares/auth");

//create a subject

router.post("/subject/create", auth, auth2, async (req, res) => {
  const subject = new Subject(req.body);
  try {
    await subject.save();
    res.status(201).send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
