const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    prefix: {
        type: String,
        default: ""
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isTeacher: {
        type: Boolean,
        default: false
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ],
    location: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    gradesTaught: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    pods: [
        {
            type: Schema.Types.ObjectId,
            ref: "Pod"
        }
    ],
    hours: {
        type: String,
        default: ""
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;