const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");

// CREATE NOTICE
router.post("/", async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    res.json({ message: "Notice created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL NOTICES
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE NOTICE
router.delete("/:id", async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;