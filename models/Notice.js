const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);