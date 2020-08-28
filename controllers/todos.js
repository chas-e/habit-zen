const Todo = require('../models/todo');

module.exports = {
  create,
  show,
  deleteTodo,
  editTodo,
  updateToDo
};

// allow a user to update their todo 
async function updateToDo(req, res) {
  await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, function (err, todo) {
    res.json(todo);

  })
};

// allow a user to create a todo
async function create(req, res) {
  try {
    const todo = new Todo(req.body);
    todo.user = req.params.userid;
    await todo.save();
    show(req, res);
  } catch (err) {
    res.json({
      err
    });
  }
}

// get and show a user's todos
async function show(req, res) {
  const todos = await Todo.find({
    user: req.params.userid
  });
  res.json(todos);
}

// allow a user to delete a specific todo
async function deleteTodo(req, res) {
  await Todo.findByIdAndDelete(req.params.id);
  show(req, res);
}

// allow a user to edit a todo
async function editTodo(req, res) {
  await Todo.findByIdAndUpdate(req.params.id, req.body);
  show(req, res);
}