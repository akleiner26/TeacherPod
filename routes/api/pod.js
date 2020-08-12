const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/pods"
router.route("/")
    .post(controller.createPod)

module.exports = router;