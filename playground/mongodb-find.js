const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect Mongodb server')
    }

    console.log('Connected to mongodb server');
    var db = client.db('TodoApp');
    // db.collection('Todos').find({_id: new ObjectID('5bbcaf64635b2a6cb9c47421')}).toArray().then((documents) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(documents, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch todos ', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos ', err);
    // });

    db.collection('Users').find({name: 'Swati Gulia'}).count().then((count) => {
        console.log(`Users count ${count}`);
    }, (error) => {
        console.log('Unable to fetch users ', err);
    });
    client.close();
});

// Create the repository in git
// git init
// git status
// add .gitignore file
// git add .
// git commit -m "Init Commit"
// Create the repository in github. Then run the two commands that are showing there.