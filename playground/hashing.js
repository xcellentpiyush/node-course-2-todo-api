const { SHA256 } = require('crypto-js');

const message = 'I am Piyush Jain';
const hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'SomeSecret').toString()
};

var resultHash = SHA256(JSON.stringify(token.data) + 'SomeSecret').toString();

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed');
}