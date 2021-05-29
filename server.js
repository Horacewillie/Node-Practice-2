const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const routes = require("./server/routes/routes");
const mongooseConnect = require("./server/database/connection");
const bodyParser = require("body-parser");


const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080

//Log request usinf morgan
app.use(morgan("tiny"));

//Parse request through body parser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


//set view engine
app.set("view engine", "ejs");



//Say we didn't put our ejs files in the view folder, but inside an ejs folder in the views directory
//we have to set the folder like so
//app.set('views', path.resolve(__dirname, 'view/ejs'))

//Load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

//Load Routes
app.use(routes);



//Database connection
mongooseConnect(() => {
  app.listen(3000, () => {
    console.log(`Server is connected on PORT ${PORT}!`);
  });
});
