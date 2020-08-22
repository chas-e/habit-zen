const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const habitSchema = new Schema({
    goal: String,
    habit: {
        type: String,
        done: false
},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
},
}, {
    timestamps: true
});

module.exports = mongoose.model("Habit", habitSchema);