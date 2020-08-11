const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    prefix: {
        type: String
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    children: [
        {
            type: Schema.Types.ObjectId,
            ref: "Students"
        }
    ],
    image: {
        type: String
    },
    gradesTaught: {
        type: String
    },
    bio: {
        type: Text
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    pods: {
        type: Schema.Types.ObjectId,
        ref: "Pods"
    },
    hours: {
        type: String
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;