const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/pods/:id"
router.route("/:id")
    .post(controller.createPod)
    .put(controller.addStudent)

module.exports = router;