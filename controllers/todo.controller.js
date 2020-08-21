const TodoModel = require('../models/todo.model');

// get list to dos
async function getTodos(req, res) {
  try {
    const todos = await TodoModel.getTodoList();
    res.render('pages/todo/listTodo', {
      todos,
      active: 'Todo'
    });
  } catch (err) {
    res.render('pages/error', { err });
  }
}

// get new to do
function getNewTodo(req, res) {
  res.render('pages/todo/newTodo');
}

// post new to do
async function postNewTodo(req, res) {
  try {
    await TodoModel.createNewTodo(req.body);
    res.redirect('/todos');
  } catch (err) {
    res.render('pages/error', { err });
  }
}

// get to do detail
async function getTodoDetail(req, res) {
  try {
    const todo = await TodoModel.findById(req.params.id);
    res.render('pages/todo/detailTodo', { todo });
  } catch (err) {
    res.render('pages/error', { err });
  }
}

// get to do edit
async function getTodoEdit(req, res) {
  try {
    const todo = await TodoModel.findById(req.params.id);
    res.render('pages/todo/editTodo', { todo });
  } catch (err) {
    res.render('pages/error', { err });
  }
}

// post to do edit
async function postTodoEdit(req, res) {
  try {
    await TodoModel.findOneAndUpdateTodo({ _id: req.params.id }, req.body)
    res.redirect('/todos');
  } catch (err) {
    res.render('pages/error', { err });
  }
}

// get to do delete
async function getTodoDelete(req, res) {
  try {
    await TodoModel.findOneAndRemove({ _id: req.params.id }, { useFindAndModify: false });
    res.redirect('/todos');
  } catch (err) {
    res.render('pages/error', { err });
  }
}

module.exports = {
  getTodos,
  getNewTodo,
  postNewTodo,
  getTodoDetail,
  getTodoEdit,
  postTodoEdit,
  getTodoDelete
}
