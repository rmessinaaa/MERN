const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('../routes/user.routes');
const taskRouter = require('../routes/task.routes');
const donationRouter = require('../routes/donation.routes');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);
app.use('/api', taskRouter);
app.use('/api', donationRouter);


module.exports = app;