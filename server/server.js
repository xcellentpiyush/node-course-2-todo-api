const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Rubic\'\s Cube'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (error) => {
//     console.log('Unable to save todo');
// });

var newTodo = new Todo({
    text: 'Play Sudoku',
    completed: true,
    completedAt: 12345
});

newTodo.save().then((doc) => {
    console.log('Saved todo ', doc);
}, (error) => {
    console.log('Unable to save todo');
});