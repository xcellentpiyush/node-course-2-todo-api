/**
 * This is used to connect to the mongo server
 */
// const { MongoClient } = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb');

// Example to generate Object Id

var obj = new ObjectID();
console.log(obj);

// End

// Example of Object destructuring

var user = { name: 'Piyush Jain', age: 27 };
var { name } = user;
console.log(name);
// Now lets use the same concept above

// End

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert todo ', error);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Bharti Verma',
        age: 28,
        location: 'Jaipur'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user ', error);
        }

        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    client.close();
});

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })
//     .then((db) => {
//         console.log('Connected to mongodb server');
//         db.close();
//     })
//     .catch((error) => {
//         throw new Error('Unable to connect to mongodb server');
//     });

// _id is a 12 byte value with first 4 bytes are a time stamp, 3 bytes are machine identifier, 2 bytes are process id,
// 3 bytes is counter.