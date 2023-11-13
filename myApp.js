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
    if (process.env.VAR_NAME === "uppercase") {
        response = "Hello json".toUpperCase();
        res.json({"message" : response});
        console.log("Response: ", response + "Message Style: ", process.env.VAR_NAME); 
      } else {
        response = "Hello json";
        res.json({"message" : response}); 
        console.log("Response: ", response + "Message Style: ", process.env.VAR_NAME );  
      }
      
});





































 module.exports = app;
