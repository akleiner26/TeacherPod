const db = require("../models");
const bcrypt = require("bcryptjs");
const authCheck = require("../configs/authentication/isAuthenticated");
const mongoose = require("mongoose")

module.exports = {
    //Used in GET Routes
    //Card search
    findAllTeachers: (req, res) => {
        console.log(req.query);
        db.User.find({ gradesTaught: req.query.grades, isTeacher: true }).populate("pods")
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    findAllTeachersUnsearched: (req, res) => {
        // console.log(req.query);
        db.User.find({ isTeacher: true }).populate("pods")
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    //Teacher Profile w/ Pods
    findOneTeacherById: (req, res) => {
        db.User.find({ _id: mongoose.Types.ObjectId(req.params.id) }).populate({
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
        db.User.find({ _id: req.params.id }).populate("students")
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    //Used in POST routes
    //Login
    loginUser: (req, res) => {
        console.log(req.body);
        db.User.findOne({ username: req.body.username})
            .then(user => {
                console.log(user);
                if (!user) {
                    res.status(500).json({error: "Could not find an account with that username and password combination. Please try again with the correct credentials."})
                }
                else {
                    let login = bcrypt.compareSync(req.body.password, user.password);
                    if(!login){
                        res.status(500).json({error: "Could not find an account with that username and password combination. Please try again with the correct credentials."})
                    }
                    console.log("matched staging for cookie")
                    //Save session id
                    req.session.userId = user._id;
                    req.session.username = user.username;
                    console.log(req.session)
                    res.status(201).json({message: "Logged in"});
                }
            })
            .catch(err => res.json(err))
    },
    loginStatus: (req, res) => {
        authCheck(req, res);
    },
    createUser: (req, res) => {
        db.User.find({ username: req.body.username })
            .then(user => {
                // If no accounts with that username then create new user
                if (user.length == 0){
                    let hashedPW = bcrypt.hashSync(req.body.password);
                    req.body.password = hashedPW;
                    db.User.create(req.body)
                        .then(accountCreated => {
                            req.session.userId = accountCreated._id;
                            req.session.username = accountCreated.username;
                            console.log(req.session)
                            res.status(200).json({message: "Signed up and logged in"});
                        })
                        .catch(err => res.json(err))
                }
                // Else cannot create account
                else {
                    res.status(500).json({message: "User already exists, please sign up with a different username"});
                }
            })
    },
    createTeacher: (req, res) => {
        db.User.find({ username: req.body.username })
            .then(user => {
                // If no accounts with that username then create new user
                if (user.length == 0){
                    let hashedPW = bcrypt.hashSync(req.body.password);
                    req.body.password = hashedPW;
                    req.body.isTeacher = true;
                    db.User.create(req.body)
                        .then(user => {
                            req.session.userId = user._id;
                            req.session.username = user.username;
                            console.log(req.session)
                            res.status(200).json({message: "Signed up and logged in"});
                        })
                        .catch(err => res.json(err))
                }
                // Else cannot create account
                else {
                    res.status(500).json({message: "User already exists, please sign up with a different username"});
                }
            })
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
        console.log(req.params.username);
        db.Conversation.find({ participants: req.params.username }).populate("messengers")
            .then(results => {
                console.log(results)
                res.json(results);
            })
            .catch(err => res.json(err))
    },
    // Find all messages between user logged in and incoming user
    findAllMessagesBetween: (req, res) => {
        console.log(req.params.usernames);
        let users = req.params.usernames.split("+");
        db.Conversation.find({ participants: users[0] && users[1]}).populate("messengers")
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
    // Used in POST routes
    //Send a message, req.body.message must include sender(id), receiver(id), and content keys
    createMessage: (req, res) => {
        db.Messenger.create(req.body.message)
          .then(message => {
            console.log(message)
            db.Conversation.findOneAndUpdate({ participants: { $all: [message.receiver, message.sender]}}, { $push: { messengers: message._id }}, {new: true})
                .then(results => res.json(results))
        })
            .catch(err => res.json(err))
    },
    createConversation: (req, res) => {
        console.log(req.body)
        db.Conversation.create(req.body)
            .then(results => res.json(results))
            .catch(err => res.json(err))
    },
}