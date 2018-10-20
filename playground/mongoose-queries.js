const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5bcb5f14bc152e186000f6d2';
if (!ObjectID.isValid(id)) {
    console.log('Id is invalid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('User Id doesn\'t\ exists');
    }
    console.log('Todo By Id', todo);
}).catch((error) => {
    console.log(error);
});