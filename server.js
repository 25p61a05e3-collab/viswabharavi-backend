const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors({
  origin: "*",
}));
app.use(express.json());

// =====================
// MONGODB CONNECTION
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("DB Error:", err.message));

// =====================
// TEST ROUTES
// =====================
app.get("/", (req, res) => {
  res.send("VISWABHARAVI Backend is running 🚀");
});

app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "Backend is live 🚀" });
});

// =====================
// ROUTES
// =====================

// ADMIN
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

// ADMISSIONS
const admissionRoutes = require("./routes/admissionRoutes");
app.use("/api/admissions", admissionRoutes);

// NOTICES
const noticeRoutes = require("./routes/noticeRoutes");
app.use("/api/notices", noticeRoutes);

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});