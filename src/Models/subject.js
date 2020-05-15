const mongoose = require("mongoose");

const subject = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["primary", "jss", "sss"],
    },

    admin: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", subject);

module.exports = Subject;
