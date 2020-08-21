const mongoose = require('mongoose');
const TodoModel = require('./models/todo.model');

const mongoHost = '127.0.0.1:27017';
const dbName = 'my_db';
const mongoURI = `mongodb://${mongoHost}/${dbName}`;

function connect() {
  return mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
}

function testDB() {
  let newTodo = new TodoModel({
    name: 'to do 1',
    description: 'description of to do 1',
  })
  // save to db
  // newTodo.save()
  //   .then((doc) => {
  //     console.log(doc);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  TodoModel.find({
    name: 'to do 1' // search query 
  })
    .then((doc) => {
      console.log('find document');
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    })

  TodoModel.findOneAndUpdate(
    {
      name: 'to do 1' // search query
    },
    {
      name: 'to do 2' // field and value to update
    },
    {
      new: true // return updated doc
    })
    .then((doc) => {
      console.log('update document');
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    })

  TodoModel.findOneAndRemove({
    name: 'to do 2' // search query 
  })
    .then((response) => {
      console.log('delete document');
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
}

function initDB() {
  TodoModel.insertMany([
    {
      name: 'Programming',
      description: 'Learn NodeJS'
    },
    {
      name: 'English',
      description: 'Learn 5 words'
    },
    {
      name: 'exercise',
      description: 'Run 2km'
    }
  ])
  .then(() => {
    console.log('Init database successfully');
  })
  .catch((err)=> {
    console.log(err);
  })
}

module.exports = {
  connect,
  testDB,
  initDB
}