var Todo = require('../models/todo');

module.exports = {
  create,
  show,
  //   delete: deleteTodo
};

async function create(req, res) {
  try {
    await Todo.create(req.body);
    // Use the highScores action to return the list
    show(req, res);
  } catch (err) {
    res.json({
      err
    });
  }
}

async function show(req, res) {
  console.log(req.user);
  const todos = await Todo.find({})
    .sort({
      todos: '',
      done: ''
    })
  // Default to a limit of 20 high scores
  // if not specified in a query string
  // .limit(req.query.limit || 20);
  res.json(todos);
}