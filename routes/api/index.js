const router = require("express").Router();
const userRoutes = require("./users");
const podRoutes = require("./pods");
const studentRoutes = require("./students");
const messageRoutes = require("./messages");

// User routes
router.use("/users", userRoutes);

// Pod routes
router.use("/pods", podRoutes);

// Student routes
router.use("/students", studentRoutes);

// Message routes
router.use("/messages", messageRoutes);

module.exports = router;