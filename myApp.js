//Pull environment variables
require('dotenv').config();

let express = require('express');
let app = express();


//app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
const messageStyle = process.env.MESSAGE_STYLE;




app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});
app.get("/json", (req, res) => {
    if(messageStyle === "uppercase"){
        res.json({"message": "hello json".toUpperCase()});
    } else {
        res.json({"message": "hello json".toLowerCase()});
    }
    
})





































 module.exports = app;
