const app =  require("./src/app/app.js");
const connectDB = require('./src/db.js');
const cors = require('cors');
require('dotenv').config();

app.use(cors());

connectDB();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server escuchando en el puerto ${port}`));

