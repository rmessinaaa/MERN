const express = require('express');

const morgan = require('morgan');

const router = require('../routes/user.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

module.exports = app;