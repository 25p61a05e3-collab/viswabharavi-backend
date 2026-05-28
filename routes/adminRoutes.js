const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// HARD-CODED ADMIN LOGIN
const ADMIN = {
  username: "admin",
  password: "admin123",
};

// LOGIN ROUTE
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("LOGIN REQUEST:", req.body);

  if (
    username?.trim() !== ADMIN.username ||
    password?.trim() !== ADMIN.password
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username: ADMIN.username },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: "1d" }
  );

  res.json({ token });
});

module.exports = router;