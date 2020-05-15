const mongoose = require("mongoose");

const lesson = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    subject: {},
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Lesson", lesson);

module.exports = Lesson;
