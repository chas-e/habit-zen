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
    sDate: new Date(sy, sm-1, sd) .toDateString(),
    eDate: new Date(s)
}, {
    timestamps: true
});

module.exports = mongoose.model("Habit", habitSchema);