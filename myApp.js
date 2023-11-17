//Pull dependencies
require('dotenv').config();
const bodyParser = require('body-parser');

let express = require('express');
let app = express();


// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

//Middleware to intercept all GET requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(bodyParser.json());
app.use("/post", bodyParser.urlencoded({extended: false}));



app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({"time": req.time});
});

var response = "Hello Json".toUpperCase(); // now becomes "HELLO WORLD"


app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    //Do it the FCC way
    if (process.env.MESSAGE_STYLE == "uppercase") {
        response = "Hello json".toUpperCase();
        res.json({"message" : response});
        console.log("Response: ", response + " "+ "Message Style: ", process.env.MESSAGE_STYLE); 
      } else {
        response = "Hello json";
        res.json({"message" : response}); 
        console.log("Response: ", response + " "+ "Message Style: ", process.env.MESSAGE_STYLE);  
      }
      
});

app.get("/:word/echo", (req, res) => {
  req.echo = req.params.word;
  res.json({"echo": req.echo});
});

app.get("/name", (req, res) => {
 //const req.query = {first: , last: 'lastname'};
 const fullname = req.query.firstname + " "+ req.query.lastname;
 res.json({"name": fullname});
});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ "name": string });
  //console.log(`${req.body.first}`);
});




































 module.exports = app;
