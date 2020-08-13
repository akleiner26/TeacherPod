const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/messages"
router.route("/")
    .post(controller.createMessage)

// Matches with "/api/messages/:username"
router.route("/:username")
    .get(controller.findAllMessages)

// Matches with "/api/messages/between"
router.route("/between/:usernames")
    .get(controller.findAllMessagesBetween)
    
module.exports = router;