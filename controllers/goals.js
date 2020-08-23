var Goal = require('../models/goal');

module.exports = {
    create,
}

async function create(req, res) {
    try {
        Goal.create(req.body);
        habitsInfo(req, res);
    } catch(err) {
        res.json({err});
    }
}