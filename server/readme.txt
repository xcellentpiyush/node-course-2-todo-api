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

To deploy the code in heroku we need to do some changes:

1) Add following lines of code in server.js
const port = process.env.PORT || 3000;
and then use this port in app.listen

2) Add start script in package.json
"start": "node server/server.js"

3) Add engines json in package.json by telling the node version

4) Go to heroku website
Click on configure Add-ons
Click on find more add-ons
Click on mLab MongoDB

5) Create new heroku app by typing the command in the terminal:
heroku create
type te following command to add the addons with te heroku for MongoDB
heroku addons:create mongolab:sandbox

after that type the command:

heroku config

This will give mongodb uri

6) Now change the mongodb uri in mongoose.js file.

7) Now put all the changes in git.

git status

git commit -am 'Setup app for heroku'

git push

git push heroku master

8) heroku logs is the command to check the logs.

9) Now our url is ready. Copy that url and see the services working.