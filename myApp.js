let express = require('express');
let app = express();

//app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));
const messageStyle = process.env.MESSAGE_STYLE;
console.log(messageStyle);


app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});
app.get("/json", (req, res) => {
    res.json({"message": messageStyle});
})





































 module.exports = app;
