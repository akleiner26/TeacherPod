const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messengerSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
})

const Messenger = mongoose.model("Exercise", messengerSchema);

module.exports = Messenger;