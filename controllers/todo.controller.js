const TodoModel = require('../models/todo.model');

function getTodos(req, res) {
  TodoModel.getTodoList()
    .then((todos) => {
      res.render('pages/todo/listTodo', {
        todos,
        active: 'Todo'
      });
    })
    .catch((err) => {
      res.render('pages/error', { err });
    })
}

function getNewTodo(req, res) {
  res.render('pages/todo/newTodo');
}

function postNewTodo(req, res) {
  console.log('req.body ', req.body);
  TodoModel.createNewTodo(req.body)
    .then(() => {
      res.redirect('/todos');
    })
    .catch((err) => {
      res.render('pages/error', { err });
    })
}

module.exports = {
  getTodos,
  getNewTodo,
  postNewTodo
}
