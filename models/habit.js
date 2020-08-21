const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const habitSchema = new Schema({
    goal: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    habit: String,
}, {
    timestamps: true
});

module.exports = mongoose.model("Habit", habitSchema);