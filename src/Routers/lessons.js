const express = require("express");

const Lesson = require("../Models/lesson");

const router = new express.Router();
const { auth, auth2 } = require("../Middlewares/auth");

//create lesson
router.post("/lesson/create", auth, auth2, async (req, res) => {
  const lesson = new Lesson(req.body);
  try {
    await lesson.save();

    res.status(201).send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});
//book lesson

//retrieve all lessons
router.get("/lessons", auth, auth2, async (req, res) => {
  try {
    const lesson = await Lesson.find({});

    res.status(201).send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get lesson by id
router.get("/lesson/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const lesson = await Lesson.findById(_id);

    res.status(201).send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});
//update a lesson
router.patch("/lesson/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const lesson = await Lesson.findOneAndUpdate(_id);

    if (!lesson) {
      return res.status(404).send();
    }
    res.send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete a lesson

router.delete("/lesson/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const lesson = await Lesson.findByIdAndDelete(_id);

    if (!lesson) {
      return res.status(404).send();
    }
    res.send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
