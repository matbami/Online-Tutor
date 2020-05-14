const express = require("express");

const User = require("../Models/User");

const router = new express.Router();
const { auth, auth2 } = require("../Middlewares/auth");

//getalltutors
router.get("/tutors", auth2, async (req, res) => {
  try {
    const user = await User.find({ role: "tutor" });

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

//get tutor by id
router.get("/tutor/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOne({ _id });

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

//deactivatetutor
router.get("/tutor/:id", auth, auth2, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

//login
// router.post("/user/login", async (req, res) => {
//   try {
//     const user = await User.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     const token = await user.generateAuthToken();

//     // console.log(token)
//     res.send({ user, token });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

//tuto

module.exports = router;
