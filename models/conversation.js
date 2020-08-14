const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    participants: [],
    messages: {
        type: Schema.Types.ObjectId,
        ref: "Messenger"
    }
})

const Conversation = mongoose.model("Conversations", conversationSchema);

module.exports = Conversation;