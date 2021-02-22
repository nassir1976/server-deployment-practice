'use strict';

require('dotenv').config();

const server = require('./server/server.js');

server.start(process.env.PORT);
server.start(3000)