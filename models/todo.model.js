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

// define model
const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;
