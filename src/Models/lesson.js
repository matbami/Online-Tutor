const mongoose = require("mongoose");

const lesson = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "subject",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Lesson", lesson);

module.exports = Lesson;
