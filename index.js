const app =  require("./src/app/app.js");
const connectDB = require('./src/db.js')

connectDB();
const port = 8080;

app.listen(port, () => console.log(`Server escuchando en el puerto ${port}`));

