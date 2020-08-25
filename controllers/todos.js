const Todo = require('../models/todo');

module.exports = {
  create,
  show,
  delete: deleteTodo
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
  const todos = await Todo.find({});
  res.json(todos);
}

async function deleteTodo(req, res) {
  const todo = await Todo.findByIdAndRemove(req.params.id);
  res.json(todo);
}