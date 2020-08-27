const Habit = require('../models/habit');
// const User = require('../models/user');

module.exports = {
    show,
    create,
    deleteHabit,
    update,
    editHabit
};


async function update(req, res) {
    await Habit.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, habit) {
        res.json(habit);

    })
};


async function create(req, res) {
    try {
        const habit = new Habit(req.body);
        habit.user = req.params.userid;
        await habit.save();
        show(req, res);
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            err: "Something went wrong"
        });
    }
}

// IDK if this will actually work or not, idea is to get/ render habits associated with the logged in user
async function show(req, res) {
    const habits = await Habit.find({
        user: req.params.userid
    })
    res.json(habits);
};

async function deleteHabit(req, res) {
    await Habit.findByIdAndDelete(req.params.id);
    show(req, res);
}

async function editHabit(req, res) {
    await Habit.findByIdAndUpdate(req.params.id, req.body);
    show(req, res);
}