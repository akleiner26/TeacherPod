const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    participants: [],
    messengers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Messenger"
        }
    ]
})

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;