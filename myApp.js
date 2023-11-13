//Pull environment variables
require('dotenv').config();

let express = require('express');
let app = express();


//app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
var response = "Hello Json";





app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});
app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": response.toUpperCase()});
        console.log(process.env.MESSAGE_STYLE.toUpperCase());
    } else {
        res.json({"message": "Hello json"});
        console.log(process.env.MESSAGE_STYLE.toUpperCase());
    }
    
})





































 module.exports = app;
