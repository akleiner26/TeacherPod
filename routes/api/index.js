const router = require("express").Router();
const userRoutes = require("./users");
const studentRoutes = require("./students");
const messageRoutes = require("./messages");

// User routes
router.use("/users", userRoutes);

// Student routes
router.use("/students", studentRoutes);

// Message routes
router.use("/messages", messageRoutes);

module.exports = router;