const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const uuid = require('uuid');
const path = require('path');
const router = require('../routes/user.routes');
const taskRouter = require('../routes/task.routes');
const donationRouter = require('../routes/donation.routes');
const fileRouter = require('../routes/images.routes');
const exp = require('constants');
const app = express();

app.set('views', path.join(__dirname, 'views'));

/*------------------------------------------------------*/

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
/*-------------------------------------------------------*/
app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
})
app.use(multer({ storage: storage }).single('image'));

/*----------------------------------------------------------*/
app.use('/api', router);
app.use('/api', taskRouter);
app.use('/api', donationRouter);
app.use('/api', fileRouter);


module.exports = app;