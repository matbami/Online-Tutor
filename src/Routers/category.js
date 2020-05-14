const express = require("express");

const Category = require("../Models/category");

const router = new express.Router();
const { auth, auth2 } = require("../Middlewares/auth");

//create a category
router.post("/category/create", auth, auth2, async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();

    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

//update a category
router.patch("/category/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const category = await Category.findOneAndUpdate(_id);

    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete a category

router.delete("/category/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const category = await Category.findByIdAndDelete(_id);

    if (!category) {
      return res.status(404).send();
    }
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
