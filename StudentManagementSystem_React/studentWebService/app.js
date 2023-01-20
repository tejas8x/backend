var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var router = require("./router/route");

mongoose.Promise = global.Promise;

var url = "mongodb://127.0.0.1:27017/test";
mongoose.connect(url, { connectTimeoutMS: 1000 }, (err, data) => {
    if (err) { console.log("Couldn't connect") }
    else {
        console.log("connection done with database")
    }
});
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));
app.use("/", router);

app.listen(3010);
console.log("Server started");



