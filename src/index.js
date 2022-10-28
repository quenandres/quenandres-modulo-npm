const axios = require('axios');

const greet = name => 'Hello '+ name;

const users = async() => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2');
    return data;
}

const PI = Math.PI;

module.exports = {
    greet,
    users,
    PI
}