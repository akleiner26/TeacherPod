const router = require("express").Router();
const userRoutes = require("./users");
const podRoutes = require("./pods");
const studentRoutes = require("./students");

// User routes
router.use("/users", userRoutes);

// Pod routes
router.use("/pods", podRoutes);

// Student routes
router.use("/students", studentRoutes);

module.exports = router;