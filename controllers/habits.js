const Habit = require('../models/habit');

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