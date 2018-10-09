const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to mongodb server.');
    }

    console.log('Connected to mongodb server.');
    var db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({ name: 'Ricky Jain' }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bbc804289702f0bfca56b35') }).then((result) => {
        console.log(result);
    });

    client.close();
});
