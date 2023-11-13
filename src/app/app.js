const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const router = require('../routes/user.routes');
const taskRouter = require('../routes/task.routes');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);
app.use('/api', taskRouter);

module.exports = app;