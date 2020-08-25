const Todo = require('../models/todo');

module.exports = {
  create,
  show,

  deleteTodo,
  // editTodo

};

async function create(req, res) {
  try {
    await Todo.create(req.body);
    show(req, res);
  } catch (err) {
    res.json({
      err
    });
  }
}

async function show(req, res) {

    async function deleteTodo(req, res) {
      await Todo.findByIdAndDelete(req.params.id);
      show(req, res);
    }