var Todo = require('../models/todo');

module.exports = {
  create,
  show,
  deleteTodo,
  editTodo
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
  const todos = await Todo.find({})
    .sort({
      text: '',
      done: '',
      date: ''
    })
  
  res.json(todos);
}

async function deleteTodo(req, res) {
   await Todo.findByIdAndDelete(req.params.id);
show(req, res);
}

async function editTodo(req, res) {
  console.log("todo controller", req.body);
   await Todo.findByIdAndUpdate(req.params.id);
  show(req, res);
}
