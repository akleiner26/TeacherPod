const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/users"
router.route("/")
    .get(controller.findAllTeachers)

// Matches with "/api/users/:id"
router.route("/:id")
    .get(controller.findOneTeacherById)
    .get(controller.findOneParentById)

// Matches with "/api/users/:username"
router.route("/:username")
    .get(controller.findOneUserByLogin)

module.exports = router;