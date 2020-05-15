const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["primary", "jss", "sss"],
    },

    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", category);

module.exports = Category;
