const Habit = require('../models/habit');

module.exports = {
    show,
    create,
    deleteHabit,
    update,
    editHabit
};

// update a habit using its id
async function update(req, res) {
    await Habit.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, function (err, habit) {
        res.json(habit);

    })
};


// allow a user to create a habit
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

// show habits that were created by a user
async function show(req, res) {
    const habits = await Habit.find({
        user: req.params.userid
    })
    res.json(habits);
};

// allow a user to delete a habit
async function deleteHabit(req, res) {
    await Habit.findByIdAndDelete(req.params.id);
    show(req, res);
}

// allow a user to edit a habit
async function editHabit(req, res) {
    await Habit.findByIdAndUpdate(req.params.id, req.body);
    show(req, res);
}