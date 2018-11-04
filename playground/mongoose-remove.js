const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// Remove all the data from the document
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Remove the record by the specified id
Todo.findByIdAndRemove('5bdf2daf44675e0009908985').then(doc => {
    console.log(doc);
});

// Find one and delete. It deletes only the first matching id
Todo.findOneAndRemove({_id: 'abc'}).then((doc) => {
    console.log(doc);
});