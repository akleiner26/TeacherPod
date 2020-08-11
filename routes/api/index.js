const router = require("express").Router();
const userRoutes = require("./users");
const podRoutes = require("./pods");
const studentRoutes = require("./students");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;