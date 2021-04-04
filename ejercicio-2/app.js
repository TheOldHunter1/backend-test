setTimeout(() => {
    require('dotenv').config();

    const fillDB = require('./libs/faker');
    const Server = require('./models/server');


    fillDB();

    const server = new Server();

    server.listen();
}, 9000);