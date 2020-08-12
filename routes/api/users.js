const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/users"
router.route("/")
    .get(controller.findAllTeachers)

// Matches with "/api/users/teacher/:id"
router.route("/teacher/:id")
    .get(controller.findOneTeacherById)

// Matches with "/api/users/parent/:id"
router.route("/parent/:id")
    .get(controller.findOneParentById)

// Matches with "/api/users/:username"
router.route("/:username")
    .get(controller.findOneUserByLogin)

module.exports = router;