const express = require("express");
const router = express.Router();

const todoController = require('../controllers/todo.controller');

// get to do list
router.get('/todos', todoController.getTodos);

//  get new to do
router.get('/todos/new', todoController.getNewTodo);

// post new to do
router.post('/todos/new', todoController.postNewTodo);

// get to do detail
router.get('/todos/:id/detail', todoController.getTodoDetail);

// get to do edit
router.get('/todos/:id/edit', todoController.getTodoEdit);

// post to do edit
router.post('/todos/:id/edit', todoController.postTodoEdit);

// get to do delete
router.get('/todos/:id/delete', todoController.getTodoDelete);

module.exports = router;
