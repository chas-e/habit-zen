const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    habits: String,
    progress: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
} 
}, {
    timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);
