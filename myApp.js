//Pull environment variables
require('dotenv').config();

let express = require('express');
let app = express();


//app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD"





app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});
app.get("/json", (req, res) => {
    //Do it the FCC way
    if (process.env.VAR_NAME === "allCaps") {
        response = "Hello json".toUpperCase();
      } else {
        response = "Hello json";
      }  
});





































 module.exports = app;
