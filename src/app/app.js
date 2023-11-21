const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const uuid = require('uuid');
const path = require('path');
const router = require('../routes/user.routes');
const taskRouter = require('../routes/task.routes');
const donationRouter = require('../routes/donation.routes');
const fileRouter = require('../routes/images.routes');
const exp = require('constants');
const fileUpload = require('express-fileupload');
const app = express();
app.use(express.static(__dirname));


/*------------------------------------------------------*/

app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
/*-------------------------------------------------------*/
app.use(express.urlencoded({extended: false}));



/*----------------------------------------------------------*/
app.use('/api', router);
app.use('/api', taskRouter);
app.use('/api', donationRouter);
app.use('/api', fileRouter);


module.exports = app;