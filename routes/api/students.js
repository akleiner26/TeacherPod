const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/students"
router.route("/")
    .create(controller.addOneStudentByParentId)

// Matches with "/api/students/:id"
router.route("/:id")
    .delete(controller.removeOneStudentByParentId)
    .delete(controller.removeOneStudentFromPod);

module.exports = router;