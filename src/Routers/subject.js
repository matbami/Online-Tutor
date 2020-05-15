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

//subject update
router.patch("/subject/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const subject = await Subject.findOne({ _id });

    await subject.save();

    if (!subject) {
      return res.status(404).send();
    }
    res.send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
});

//subject delete
router.delete("/subject/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const subject = await Subject.findByIdAndDelete(_id);

    if (!subject) {
      return res.status(404).send();
    }
    res.send(subject);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
