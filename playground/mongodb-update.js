const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to mongodb server.');
    }

    console.log('Connected to mongodb server');

    var db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectID('5bbcb8ed96eb7645e70e84e6') },
    //     {
    //         $set: {
    //             text: 'Solve 4x4x4 Rubic\'\s Cube'
    //         },
    //     },
    //     { returnOriginal: false }
    // ).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5bbc90dfadb39c318cab77fb') },
        {
            $set: {
                name: 'Swati Tirthram Gulia'
            },
            $inc: {
                age: 1
            }
        },
        { returnOriginal: false }
    ).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    client.close();
});
