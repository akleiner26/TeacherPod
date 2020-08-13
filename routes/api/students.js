const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/students"
router.route("/:id")
    //Takes in params where id is parent id, requires body object => {parentUsername, studentFirstName, studentLastName}
    //This adds student to pod, pod must exist
    .put(controller.addOneStudentByParentId)

// Matches with "/api/students/byparent/:id"
router.route("/byparent/:id")
    //Takes in params where id is parent id, requires body object => {idToDelete} which corresponds to the students(child) to remove from parent profile
    .delete(controller.removeOneStudentByParentId)

// Matches with "/api/students/pod/:id"
router.route("/pod/:id")
    //Takes in params where id is teacher id, requires body object => {idToDelete} which corresponds to the students id up for deletion
    .delete(controller.removeOneStudentFromPod);

module.exports = router;