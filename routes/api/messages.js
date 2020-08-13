const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/messages"
router.route("/")
    //Takes in body object => {sender(logged in user's username), receiver, content} where sender and receiver are usernames and content is the message
    .post(controller.createMessage)

// Matches with "/api/messages/:username"
router.route("/:username")
    //Takes in params where username is logged in parent id
    .get(controller.findAllMessages)

// Matches with "/api/messages/between"
router.route("/between/:usernames")
    //Takes in params where usernames are a string separated by "+" i.e /api/messages/between/testUser1+testUser2
    .get(controller.findAllMessagesBetween)
    
module.exports = router;