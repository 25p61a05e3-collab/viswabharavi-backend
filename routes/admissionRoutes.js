const express = require("express");
const router = express.Router();

const Admission = require("../models/Admission");
const auth = require("../middleware/auth");

// CREATE ADMISSION (PUBLIC)
router.post("/", async (req, res) => {
  try {
    const data = new Admission(req.body);
    await data.save();
    res.json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ADMISSIONS (ADMIN ONLY)
router.get("/", auth, async (req, res) => {
  try {
    const data = await Admission.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE ADMISSION (ADMIN ONLY)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;