const mongoose = require('mongoose');

// define schema
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  expiredDate: {
    type: Date,
    default: new Date()
  }
})

// define static method
todoSchema.statics.getTodoList = function () {
  return this.find({});
}

todoSchema.statics.createNewTodo = function(todo) {
  return this.create(todo);
}

todoSchema.statics = {
  getTodoList: function () {
    return this.find({});
  },
  createNewTodo: function(todo) {
    return this.create(todo);
  },
  findOneAndUpdateTodo: function(condition, updateTodo) {
    return this.findOneAndUpdate(condition, updateTodo, { useFindAndModify: false })
  }
}

// define model
const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;
