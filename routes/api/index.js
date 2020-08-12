const router = require("express").Router();
const userRoutes = require("./users");
const studentRoutes = require("./students");
const podRoutes = require("./pods");
const messageRoutes = require("./messages");

// User routes
router.use("/users", userRoutes);

// Student routes
router.use("/students", studentRoutes);

// Pod routes
router.use("/pods", podRoutes);

// Message routes
router.use("/messages", messageRoutes);

module.exports = router;