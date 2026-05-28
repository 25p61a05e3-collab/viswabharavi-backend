const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    classApplying: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);