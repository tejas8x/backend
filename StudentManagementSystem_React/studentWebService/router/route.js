var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var StudSchema = new schema({
    roll: String,
    name: String,
});

var Data = mongoose.model("studdata", StudSchema, "studentData");

router.get("/stud", (req, res) => {
    Data.find().exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
});

module.exports = router;