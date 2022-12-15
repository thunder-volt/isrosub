const mongoose = require("mongoose");

const multiSchema = new mongoose.Schema({
    name: String,
    year: String,
    gdp: Number
})

module.exports = mongoose.model("multiviews", multiSchema);