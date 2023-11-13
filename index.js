const app =  require("./src/app/app.js");
const connectDB = require('./src/db.js');
require('dotenv').config();

connectDB();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server escuchando en el puerto ${port}`));

