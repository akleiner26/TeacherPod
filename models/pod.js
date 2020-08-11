const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: String,
    grade: String,
    slots: {
        type: Number,
        required: true
    },
    price: Number,
    location: {
        type: String,
        required
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
})

const Pod = mongoose.model("Exercise", podSchema);

module.exports = Pod;