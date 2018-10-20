Install mongoose at first by typing the command: npm i mongoose --save

// var newTodo = new Todo({
//     text: 'Shopping'
// });

// newTodo.save().then((document) => {
//     console.log('Saved todo', document);
// }, (error) => {
//     console.log('Unable to save todo');
// });

Install express :  npm i express --save

Now for testing we have to install the following packages
nodemon mocha expect supertest

npm i nodemon mocha expect supertest --save-dev

Run the test using
npm run test-watch

We can use git commit -a -m 'Any message' when we have done only modifications of files and not added anything new.
We can skip git add .