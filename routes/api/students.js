const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/students"
router.route("/")
    .put(controller.addOneStudentByParentId)

// Matches with "/api/students/byparent/:id"
router.route("/byparent/:id")
    .delete(controller.removeOneStudentByParentId)

// Matches with "/api/students/pod/:id"
router.route("/pod/:id")
    .delete(controller.removeOneStudentFromPod);

module.exports = router;