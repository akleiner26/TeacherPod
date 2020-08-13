const router = require("express").Router();
const controller = require("../../controller");


// Matches with "/api/pods/:id"
router.route("/:id")
    //Takes in params where id is teacher id, takes in body object =>  required: {name, subject, grade, slots, price}, optional key: location (default "remote")
    .post(controller.createPod)
    //Takes in params where id is pod id, takes in body object => {parentUsername, studentFirstName, studentLastName}
    .put(controller.addStudent)
    //Takes in params where id is pod id, takes in body object => {id} where id is the teacher id
    .delete(controller.removePod)

module.exports = router;