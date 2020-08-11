const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    slots: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        default: "remote"
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
})

const Pod = mongoose.model("Pod", podSchema);

module.exports = Pod;