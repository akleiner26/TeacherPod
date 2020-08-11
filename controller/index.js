const mongoose = require("mongoose");
const db = require("../models");

module.exports = {
    //Used in GET Routes
    //Card search
    findAllTeachers: (req, res) => {
        return db.User.find({ gradesTaught: req.body.grades, location: req.body.location });
    },
    //Teacher Profile w/ Pods
    findOneTeacherById: (req, res) => {
        return db.User.find({ _id: req.body.id }).populate("pods");
    },
    //Parent Profile w/ Students
    findOneParentById: (req, res) => {
        return db.User.findOne({ _id: req.body.id }).populate("Students");
    },
    //Used in POST routes
    //Login
    findOneUserByLogin: (req, res) => {
        return db.User.findOne({ username: req.body.username, password: req.body.password});
    },
    //Used in PUT routes
    //Parent Profile add child
    addOneStudentByParentId: (req, res) => {
        db.Student.create(req.body).then( ({ _id }) => {
            return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { Students: _id } }, { new: true })
        });
    },
    //Used in DELETE routes
    //Parent Profile remove child
    removeOneStudentByParentId: (req, res) => {
        db.User.findOne({ _id: req.body.id }).populate("Students").then( ({ students }) => {
            students.forEach(student => {
                if (student._id == req.body.idToDelete){
                    db.Student.remove({ _id: student._id }).then(res => {
                        return res;
                    })
                }
            })
        })
    },
    //Teacher Profile remove student from pod, take in teacher data and id of student to delete
    removeOneStudentFromPod: (req, res) => {
        db.User.findOne({ _id: req.body.id, isTeacher: true }).populate("Students").then( ({ students }) => {
            students.forEach(student => {
                if (student._id == req.body.idToDelete){
                    db.Student.remove({ _id: student._id }).then(response => {
                        return response;
                    })
                }
            })
        })
    },
    ////////// MESSAGING //////////////////
    // Used in Get routes
    // Find all messages that user has recieved, takes in logged in users id
    findAllMessages:(req, res) => {
        return db.Messenger.find({ receiver: req.body.id })
    },
    // Find all messages between user logged in and incoming user
    findAllMessagesBetween: (req, res) => {
        return db.Messenger.find({ receiver: (req.body.id || req.body.senderId ), sender: (req.body.id || req.body.senderId ) });
    },
    // Used in POST routes
    //Send a message, req.body.message must include sender(id), receiver(id), and content keys
    createMessage: (req, res) => {
        db.Messenger.create(req.body.message).then(response => {
            return response;
        })
    }
}