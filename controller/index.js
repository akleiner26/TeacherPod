const db = require("../models");

module.exports = {
    //Used in GET Routes
    //Card search
    findAllTeachers: (req, res) => {
        console.log(req.query);
        db.User.find({ gradesTaught: req.query.grades, location: req.query.location, isTeacher: true }).populate("pods")
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    //Teacher Profile w/ Pods
    findOneTeacherById: (req, res) => {
        db.User.find({ _id: req.params.id }).populate({
            path: "pods", populate: {
                path: "students",
                model: "Student"
            }
        })
            .then(results => {
                console.log(results);
                res.json(results);
            })
            .catch(err => res.json(err))
    },
    //Parent Profile w/ Students
    findOneParentById: (req, res) => {
        db.User.find({ _id: req.params.id })
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    //Used in POST routes
    //Login
    findOneUserByLogin: (req, res) => {
        db.User.findOne({ username: req.body.username, password: req.body.password })
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    createUser: (req, res) => {
        console.log(req.body);
        db.User.create(req.body)
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    createTeacher: (req, res) => {
        req.body.isTeacher = true;
        db.User.create(req.body)
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    updateProfile: (req, res) => {
        db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true })
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    createPod: (req, res) => {
        db.Pod.create(req.body)
            .then(({ _id }) => {
                db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { pods: _id } }, { new: true })
                    .then(results => {
                        res.json(results);
                    })
            })
            .catch(err => res.json(err))
    },
    removePod: (req, res) => {
        db.Pod.remove({ _id: req.params.id })
            .catch(err => res.json(err))
        db.User.findOneAndUpdate({ _id: req.body.id }, { $pull: { pods: req.params.id } })
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    //Used in PUT routes
    //Parent Profile add child
    updateProfile: (req, res) => {
        db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { upsert: true })
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    addOneStudentByParentId: (req, res) => {
        db.Student.create(req.body).then(({ _id }) => db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { students: _id } }, { new: true }))
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    addStudent: (req, res) => {
        db.User.find({ username: req.body.parentUsername }).populate("students").then(results => {
            console.log(results[0].students);
            let students = results[0].students;
            students.forEach(student => {
                if (student.firstName == req.body.studentFirstName && student.lastName == req.body.studentLastName) {
                    db.Pod.findOneAndUpdate({ _id: req.params.id }, { $push: { students: student._id } })
                        .then(results => {
                            res.json(results)
                        })
                }
            })
        })
    },
    addStudent: (req, res) => {
        db.User.find({ username: req.body.parentUsername }).populate("students").then(results => {
            console.log(results[0].students);
            let students = results[0].students;
            students.forEach(student => {
                if (student.firstName == req.body.studentFirstName && student.lastName == req.body.studentLastName){
                    db.Pod.findOneAndUpdate({ _id: req.params.id }, { $push: { students: student._id} }, { new: true})
                        .then(results => {
                            res.json(results)
                        })
                }
            })
        })
    },
    //Used in DELETE routes
    //Parent Profile remove child
    removeOneStudentByParentId: (req, res) => {
        db.User.findOne({ _id: req.params.id }).populate("students").then(({ students }) => {
            students.forEach(student => {
                if (student._id == req.body.idToDelete) {
                    db.Student.remove({ _id: student._id })
                        .then(() => {
                            db.User.findOneAndUpdate({ _id: req.params.id }, { $pull: { students: student._id } })
                                .then(results => {
                                    res.json(results);
                                })
                                .catch(err => res.json(err))
                        })
                        .catch(err => res.json(err))
                }
            })
        })
    },
    //Teacher Profile remove student from pod, take in teacher data and id of student to delete
    removeOneStudentFromPod: (req, res) => {
        db.Pod.find({ _id: req.params.id }).populate("students")
            .then(results => {
                let students = results[0].students;
                students.forEach(student => {
                    if (student._id == req.body.idToDelete) {
                        db.Pod.findOneAndUpdate({ _id: req.params.id }, { $pull: { students: student._id } })
                            .then(results => res.json(results))
                            .catch(err => res.json(err))
                    }
                })
            })
    },
    ////////// MESSAGING //////////////////
    // Used in Get routes
    // Find all messages that user has recieved, takes in logged in users id
    findAllMessages: (req, res) => {
        db.Messenger.find({ receiver: req.params.username })
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    // Find all messages between user logged in and incoming user
    findAllMessagesBetween: (req, res) => {
        console.log(req.params.usernames);
        let users = req.params.usernames.split("+");
        let messages = {};
        db.Messenger.find({ receiver: users[0], sender: users[1]})
            .then(results => messages.received = results)
            .catch(err => res.json(err))
        db.Messenger.find({ receiver: users[1], sender: users[0]})
            .then(results => {
                messages.sent = results;
                res.json(messages);
            })
            .catch(err => res.json(err))
    },
    // Used in POST routes
    //Send a message, req.body.message must include sender(id), receiver(id), and content keys
    createMessage: (req, res) => {
        db.Messenger.create(req.body.message)
            .then(results => res.json(results))
            .catch(err => res.json(err))
    }
}