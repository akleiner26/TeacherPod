const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    preferredName: {
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
    gradeLevel: {
        type: String
    },
    pods: {
        type: Schema.Types.ObjectId,
        ref: "Pods"
    },
    notes: {
        type: String
    }
})

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;