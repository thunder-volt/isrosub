const mongoose = require("mongoose");

const circleSchema = new mongoose.Schema({
    name: Number,
    carat: Number,
    cut: String,
    color: String,
    clarity: String,
    depth: Number,
    table: Number,
    price: Number,
    x: Number,
    y: Number,
    z: Number,
    mean: Number
})

module.exports = mongoose.model("circleviews", circleSchema);