const router = require("express").Router();
const controller = require("../../controller");

// Matches with "/api/users"
router.route("/")
    //Takes in query object => {grades, location} to find teachers based on grade taught and location (optional: default is "remote").
    //Pods are already populated
    .get(controller.findAllTeachers)
    //Requires body object => {username, password}
    .post(controller.createUser)

// Matches with "/api/users/teacher"
router.route("/teacher")
    //Requires body object => {username, password}, isTeacher boolean is added in controller
    .post(controller.createTeacher)

// Matches with "/api/users/teacher/:id"
router.route("/teacher/:id")
    //Takes in params where id is teacherId. Pods and students are already populated
    .get(controller.findOneTeacherById)
    //Takes in params where id is teacherId, also requires body object where any new fields to add/update are keys in body i.e. {gradesTaught: "5", {bio: <bioString>}, ...etc}
    .put(controller.updateProfile)

// Matches with "/api/users/parent/:id"
router.route("/parent/:id")
    //Takes in params where id is parent id, populated with students' info
    .get(controller.findOneParentById)


// Matches with "/api/users/login"
router.route("/login")
    //Takes in body object => {username, password}
    .post(controller.findOneUserByLogin)

module.exports = router;