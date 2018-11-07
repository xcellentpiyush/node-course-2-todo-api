const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

var token = jwt.sign(data, 'PrivateKey');
console.log(token);

var decoded = JSON.stringify(jwt.verify(token, 'PrivateKey'), undefined, 2);
console.log(`Decoded: ${decoded}`);