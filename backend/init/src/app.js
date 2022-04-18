const express = require('express');
const usersRouter = require('./routes/users.route');
const pino = require('pino-http')();

const app = express();

app.use(pino);
app.use(express.json());

app.use('/users', usersRouter);

module.exports = app;
