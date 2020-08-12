const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    preferredName: {
        type: String
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