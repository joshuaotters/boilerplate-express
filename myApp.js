let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));
// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


//app.get("/", (req, res) => {
    //res.sendFile(absolutePath = __dirname + '/views/index.html');
//})
//app.get("/public", (req, res) => {
    
//})




































 module.exports = app;
