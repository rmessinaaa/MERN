const express = require('express');
const bodyParser = require('body-parser');
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
app.use(express.static(path.join(__dirname, '/upload')));


/*------------------------------------------------------*/

app.use(morgan('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({limit: '100mb',extended: true}));
app.use(fileUpload({
    limits: { fileSize: 100 },
}));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
/*-------------------------------------------------------*/

// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));




/*----------------------------------------------------------*/
app.use('/api', router);
app.use('/api', taskRouter);
app.use('/api', donationRouter);
app.use('/api', fileRouter);


module.exports = app;