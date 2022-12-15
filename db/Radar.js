const mongoose = require("mongoose");

const radarSchema = new mongoose.Schema({
    item: String,
    user: String,
    score: Number
})

module.exports = mongoose.model("radarviews", radarSchema);