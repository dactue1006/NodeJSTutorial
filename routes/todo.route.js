const express = require("express");
const router = express.Router();

const todoController = require('../controllers/todo.controller');

// get to do list
router.get('/todos', todoController.getTodos);

//  get new to do
router.get('/todos/new', todoController.getNewTodo);

// post new to do
router.post('/todos/new', todoController.postNewTodo);

module.exports = router;
