const Habit = require('../models/habit');
// const User = require('../models/user');

module.exports = {
    index,
    create
};

async function create(req, res) {
    try {
        // also I think we need a way to attach the user to the habit
        await Habit.create(req.body);
        index(req, res);
    } catch (err) {
        return res.status(401).json({
            err: "Something went wrong"
        });
    }
}

// IDK if this will actually work or not, idea is to get/ render habits associated with the logged in user
async function index(req, res) {
    const habits = await Habit.find({})
        .limit(req.query.limit || 10);
    res.json(habits);
};