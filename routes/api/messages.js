const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/messages"
router.route("/")
    .post(controller.createMessage)

// Matches with "/api/messages/:id"
router.route("/:id")
    .get(controller.findAllMessages)
    .get(controller.findAllMessagesBetween)

module.exports = router;